/**
 * Navigation and breadcrumb utilities for ParroDash marketing website
 */
import { NAVIGATION_CONFIG } from '../config/site';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function getAllNavLinks(): { title: string; href: string }[] {
  const links: { title: string; href: string }[] = [];

  for (const menu of NAVIGATION_CONFIG) {
    if (menu.href) {
      links.push({ title: menu.label, href: menu.href });
    }
    if (menu.sections) {
      for (const section of menu.sections) {
        for (const link of section.links) {
          links.push({ title: link.title, href: link.href });
        }
      }
    }
    if (menu.featured) {
      links.push({ title: menu.featured.title, href: menu.featured.href });
    }
  }

  return links;
}

export function validateNoHashLinks(): boolean {
  const links = getAllNavLinks();
  return links.every((l) => !l.href.includes('#') && l.href.startsWith('/'));
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const cleanPath = pathname.split('?')[0].replace(/\/+$/, '');
  if (!cleanPath || cleanPath === '') {
    return [{ label: 'Home', href: '/' }];
  }

  const segments = cleanPath.split('/').filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const formatted = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    crumbs.push({ label: formatted, href: currentPath });
  }

  return crumbs;
}
