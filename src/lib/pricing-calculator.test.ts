import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBilling, formatCurrency, getPlanById } from './pricing-calculator';

test('calculates monthly billing for Pro plan without discounts', () => {
  const result = calculateBilling('pro', false, 5);
  assert.equal(result.unitPrice, 12);
  assert.equal(result.totalMonthly, 60);
  assert.equal(result.annualSavings, 180);
});

test('calculates annual billing for Pro plan with discount applied', () => {
  const result = calculateBilling('pro', true, 10);
  assert.equal(result.unitPrice, 9);
  assert.equal(result.totalMonthly, 90);
  assert.equal(result.totalAnnual, 1080);
  // (12 * 10 * 12) = 1440. Total annual = 1080. Savings = 360.
  assert.equal(result.annualSavings, 360);
  assert.equal(result.annualSavingsPercent, 25);
});

test('free plan always results in zero totals and no savings', () => {
  const result = calculateBilling('free', true, 5);
  assert.equal(result.unitPrice, 0);
  assert.equal(result.totalMonthly, 0);
  assert.equal(result.totalAnnual, 0);
  assert.equal(result.annualSavings, 0);
});

test('formats currency properly', () => {
  assert.equal(formatCurrency(0), '$0');
  assert.equal(formatCurrency(19), '$19');
  assert.equal(formatCurrency(1250), '$1,250');
});

test('finds existing plan by id', () => {
  const business = getPlanById('business');
  assert.ok(business);
  assert.equal(business?.name, 'Business');
});
