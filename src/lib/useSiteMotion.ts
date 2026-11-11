import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide GSAP layer for the AI Studio marketing website.
 *
 * Animate only the top-level content blocks of each page section, rather than
 * every nested dashboard node. This avoids breaking existing React interactions,
 * responsive layout, form controls, cards and product mockups.
 *
 * Every animation and ScrollTrigger belongs to a scoped GSAP context, which
 * is reverted when React Router changes pages or unmounts the layout.
 */
export function useSiteMotion(
  pageRef: RefObject<HTMLElement | null>,
  progressRef: RefObject<HTMLDivElement | null>,
  routeKey: string,
) {
  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || typeof window === 'undefined') return;

    // No hidden elements, transforms, or scroll effects for motion-sensitive visitors.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (progressRef.current) gsap.set(progressRef.current, { clearProps: 'all' });
      return;
    }

    const context = gsap.context(() => {
      const sections = Array.from(page.querySelectorAll<HTMLElement>('section')).filter(
        section => !section.parentElement?.closest('section') &&
          !section.matches('[data-gsap-skip]'),
      );

      const getBlocks = (section: HTMLElement): HTMLElement[] => {
        const inner = section.querySelector<HTMLElement>(':scope > div');
        if (!inner) return [section];
        const blocks = Array.from(inner.children).filter(
          (el): el is HTMLElement =>
            el instanceof HTMLElement &&
            !el.matches('[data-gsap-skip], script, style') &&
            !el.closest('[data-gsap-skip]'),
        );
        return blocks.length ? blocks.slice(0, 48) : [inner];
      };

      // Pages such as legal, help or 404 may not use section elements.
      // They still get a lightweight first-view entrance.
      if (sections.length === 0 && page.firstElementChild instanceof HTMLElement) {
        gsap.fromTo(page.firstElementChild, { autoAlpha: 0, y: 20 }, {
          autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        });
      }

      const first = sections[0];
      if (first) {
        const blocks = getBlocks(first);
        gsap.fromTo(
          blocks,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.86,
            stagger: 0.14,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          },
        );
      }

      // Independent ScrollTriggers ensure every major block animates at its own
      // actual viewport position, including long sections and mobile layouts.
      sections.slice(1).forEach(section => {
        getBlocks(section).forEach((block, index) => {
          gsap.fromTo(
            block,
            { autoAlpha: 0, y: index % 2 === 0 ? 30 : 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.78,
              ease: 'power2.out',
              clearProps: 'transform,opacity,visibility',
              scrollTrigger: {
                trigger: block,
                start: 'top 92%',
                once: true,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      });

      // Shared footer appears on every route, including long pages and legal pages.
      const footer = document.querySelector<HTMLElement>('footer');
      const footerContent = footer?.querySelector<HTMLElement>(':scope > div');
      if (footerContent) {
        Array.from(footerContent.children).slice(0, 8).forEach(element => {
          if (!(element instanceof HTMLElement)) return;
          gsap.fromTo(element, { autoAlpha: 0, y: 20 }, {
            autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: element, start: 'top 94%', once: true,
              invalidateOnRefresh: true,
            },
          });
        });
      }

      // Small unobtrusive reading progress indicator on every marketing route.
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: page,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.18,
              invalidateOnRefresh: true,
            },
          },
        );
      }
    }, page);

    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      window.cancelAnimationFrame(refreshId);
      context.revert();
    };
  }, [pageRef, progressRef, routeKey]);
}
