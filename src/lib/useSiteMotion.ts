import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Art-directed motion for the marketing site.
 * - Above-fold: staggered typographic composition and product-stage reveal.
 * - Below-fold: directional comparisons, grouped workflow steps, editorial content.
 * - Never hide whole sections or intercept pointer interactions.
 * - Scoped and reverted on route change; reduced-motion leaves DOM untouched.
 */
export function useSiteMotion(
  pageRef: RefObject<HTMLElement | null>,
  progressRef: RefObject<HTMLDivElement | null>,
  routeKey: string,
) {
  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || typeof window === 'undefined') return;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      if (progressRef.current) gsap.set(progressRef.current, { scaleX: 0 });
      return;
    }

    const desktop = window.matchMedia('(min-width: 1024px)').matches;
    const context = gsap.context(() => {
      const q = <T extends HTMLElement = HTMLElement>(selector: string) =>
        root.querySelector<T>(selector);

      // Hero: copy and workspace appear as one purposeful sequence.
      const heroCopy = q('[data-motion="hero-copy"]');
      const heroStage = q('[data-motion="hero-product"]');
      const firstSection = q('section');
      if (heroCopy) {
        const eyebrow = heroCopy.children[0];
        const title = heroCopy.querySelector('h1');
        const description = heroCopy.querySelector('p');
        const actions = Array.from(heroCopy.querySelectorAll('a, button'))
          .filter(el => !el.closest('[data-motion="hero-product"]'))
          .slice(0, 3);
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        if (eyebrow) tl.from(eyebrow, {
          y: 12, opacity: 0, duration: 0.48, clearProps: 'all',
        }, 0);
        if (title) tl.from(title, {
          y: 44, opacity: 0, duration: 0.9, ease: 'power4.out',
          clearProps: 'all',
        }, 0.10);
        if (description) tl.from(description, {
          y: 24, opacity: 0, duration: 0.68, clearProps: 'all',
        }, 0.30);
        if (actions.length) tl.from(actions, {
          y: 16, opacity: 0, stagger: 0.10, duration: 0.5, clearProps: 'all',
        }, 0.47);
        if (heroStage) {
          tl.from(heroStage, {
            y: 70, rotateX: desktop ? 6 : 0, opacity: 0, scale: desktop ? 0.975 : 1,
            duration: 1.2, ease: 'power3.out', transformPerspective: 1300,
            clearProps: 'all',
          }, 0.54);
        }
      } else if (firstSection) {
        const title = firstSection.querySelector('h1, h2');
        if (title) gsap.from(title, {
          y: 25, opacity: 0, duration: 0.75, ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // Product preview has subtle scroll depth on desktop; not pinned,
      // so it cannot trap scroll or cover adjacent sections.
      if (desktop && heroStage) {
        gsap.fromTo(heroStage, { y: 0 }, {
          y: -38, ease: 'none', immediateRender: false,
          scrollTrigger: {
            trigger: firstSection ?? heroStage,
            start: 'bottom 90%',
            end: 'bottom 20%',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
      }

      // Comparison cards approach from opposite directions rather than
      // showing up with the exact same fade effect.
      root.querySelectorAll<HTMLElement>('[data-motion="compare"]').forEach((container) => {
        const cards = Array.from(container.children).filter(
          (el): el is HTMLElement => el instanceof HTMLElement,
        );
        cards.slice(0, 2).forEach((card, idx) => {
          gsap.from(card, {
            x: desktop ? (idx === 0 ? -46 : 46) : 0,
            y: desktop ? 0 : 24,
            opacity: 0.78,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: container, start: 'top 84%', once: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // The process navigator reveals as a connected step sequence.
      root.querySelectorAll<HTMLElement>('[data-motion="workflow-steps"]').forEach((steps) => {
        const items = Array.from(steps.children).filter(
          (el): el is HTMLElement => el instanceof HTMLElement,
        );
        if (!items.length) return;
        gsap.from(items, {
          y: 20, opacity: 0.65, stagger: 0.095, duration: 0.66,
          ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: steps, start: 'top 88%', once: true },
        });
      });

      // Editorial section headings are the only generic reveal;
      // keep cards, inputs, and product demos fully visible at rest.
      const sections = Array.from(root.querySelectorAll<HTMLElement>('section')).filter(
        el => !el.parentElement?.closest('section'),
      );
      sections.slice(1).forEach((section) => {
        const title = section.querySelector<HTMLElement>('h2');
        if (!title) return;
        gsap.from(title, {
          y: 18, opacity: 0.5, duration: 0.7, ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: { trigger: title, start: 'top 92%', once: true },
        });
      });

      // Continuous, very restrained progress indication.
      const progress = progressRef.current;
      if (progress) {
        gsap.fromTo(progress, { scaleX: 0 }, {
          scaleX: 1, ease: 'none', transformOrigin: 'left center',
          scrollTrigger: {
            trigger: root, start: 'top top', end: 'bottom bottom',
            scrub: 0.2, invalidateOnRefresh: true,
          },
        });
      }
    }, root);

    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      window.cancelAnimationFrame(frame);
      context.revert();
    };
  }, [pageRef, progressRef, routeKey]);
}
