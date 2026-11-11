import test from 'node:test';
import assert from 'node:assert/strict';
import { getAllNavLinks, validateNoHashLinks, generateBreadcrumbs } from './navigation';

test('validates all mega-menu navigation links are proper absolute internal routes without #', () => {
  const links = getAllNavLinks();
  assert.ok(links.length > 20, 'Should have comprehensive navigation links');
  assert.equal(validateNoHashLinks(), true, 'No link should have # or empty target');
});

test('generates correct breadcrumb hierarchy', () => {
  const crumbs = generateBreadcrumbs('/features/project-management');
  assert.equal(crumbs.length, 3);
  assert.deepEqual(crumbs[0], { label: 'Home', href: '/' });
  assert.deepEqual(crumbs[1], { label: 'Features', href: '/features' });
  assert.deepEqual(crumbs[2], { label: 'Project Management', href: '/features/project-management' });
});

test('generates single home crumb for root path', () => {
  const crumbs = generateBreadcrumbs('/');
  assert.equal(crumbs.length, 1);
  assert.equal(crumbs[0].href, '/');
});
