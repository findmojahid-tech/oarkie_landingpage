import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Motion direction: typographic storytelling, not blanket section fades.
 *
 * The previous implementation hid entire section children (including controls and
 * product mockups) until ScrollTrigger fired. This can cause missing content on
 * refresh, anchor jumps and dynamic React UI. Animate specific visual elements
 * instead; never set visibility:hidden on an entire feature section.
 */
export function useSiteMotion(
  pageRef: RefObject<HTMLElement | null>,
  progressRef: RefObject<HTMLDivElement | null>,
  routeKey: string,
) {
  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progress = progressRef.current;
    if (reduceMotion) {
      if (progress) gsap.set(progress, { clearProps: 'all' });
      return;
    }

    const context = gsap.context(() => {
      const mainContent = page.firstElementChild;
      const sections = Array.from(page.querySelectorAll<HTMLElement>('section'))
        .filter(el => !el.parentElement?.closest('section') && !el.matches('[data-gsap-skip]'));

      // Above-the-fold: intentionally choreographed typography, actions, then
      // the product preview. Never delay links or leave a hidden CTA.
      const first = sections[0];
      if (first) {
        const heading = first.querySelector<HTMLElement>('h1');
        const description = heading?.nextElementSibling;
        const titleWrap = heading?.parentElement;
        const mediaWrap = first.querySelector<HTMLElement>('[data-gsap-hero-preview]') ??
          (first.firstElementChild?.lastElementChild as HTMLElement | null);

        const timeline = gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'transform,opacity' } });
        if (heading) timeline.from(heading, { y: 24, opacity: 0, duration: 0.8 }, 0.05);
        if (description instanceof HTMLElement) timeline.from(description, { y: 18, opacity: 0, duration: 0.65 }, 0.18);
        if (titleWrap) {
          const actions = titleWrap.querySelector<HTMLElement>('a[href], button');
          if (actions && actions !== heading) timeline.from(actions, { y: 10, opacity: 0, duration: 0.48 }, 0.31);
        }
        if (mediaWrap && mediaWrap !== titleWrap) {
          timeline.from(mediaWrap, { y: 24, opacity: 0, duration: 1, ease: 'power2.out' }, 0.37);
        }
      } else if (mainContent instanceof HTMLElement) {
        gsap.from(mainContent, {
          y: 12, opacity: 0, duration: 0.55, ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      }

      // Below the fold: restrained heading reveal on first entrance. No whole-
      // section hiding, no 48-element stagger, no reveal of interactive inputs.
      sections.slice(1).forEach((section, index) => {
        const inner = section.firstElementChild;
        if (!(inner instanceof HTMLElement)) return;
        const heading = inner.querySelector<HTMLElement>('h2, h3');
        if (heading) {
          gsap.from(heading, {
            y: 18, opacity: 0, duration: 0.7, ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: heading, start: 'top 93%', once: true,
              invalidateOnRefresh: true,
            },
          });
        }
        // Individual editorial screenshots glide a few pixels into view
        // without an opacity blackout. This keeps the UI readable at every
        // scroll position, including screenshots and browser Back navigation.
        const media = Array.from(inner.querySelectorAll<HTMLElement>('img, video'))
          .filter(el => !el.closest('button, a, [role="dialog"]'))
          .slice(0, 2);
        media.forEach(el => {
          gsap.from(el, {
            y: index % 2 === 0 ? 18 : 12, duration: 0.8, ease: 'power2.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el, start: 'top 96%', once: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      if (progress) {
        gsap.fromTo(progress, { scaleX: 0 }, {
          scaleX: 1, ease: 'none',
          scrollTrigger: {
            trigger: page, start: 'top top', end: 'bottom bottom',
            scrub: 0.18, invalidateOnRefresh: true,
          },
        });
      }
    }, page);

    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(frame);
      context.revert();
    };
  }, [pageRef, progressRef, routeKey]);
}
