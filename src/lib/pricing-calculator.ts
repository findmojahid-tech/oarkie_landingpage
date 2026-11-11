/**
 * Pure calculation logic for billing cycles, discounts, seats, and enterprise quotes.
 */
import { PRICING_PLANS, PricingPlan } from '../config/plans';

export function calculateBilling(
  planId: string,
  isAnnual: boolean,
  seats: number = 1
): {
  unitPrice: number;
  totalMonthly: number;
  totalAnnual: number;
  annualSavings: number;
  annualSavingsPercent: number;
} {
  const plan = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[0];
  const safeSeats = Math.max(1, Math.floor(seats));

  const monthlyRate = plan.monthlyPrice;
  const annualRatePerMonth = plan.annualPricePerMonth;

  const unitPrice = isAnnual ? annualRatePerMonth : monthlyRate;
  const totalMonthly = unitPrice * safeSeats;
  const totalAnnual = annualRatePerMonth * safeSeats * 12;

  const nonDiscountedAnnual = monthlyRate * safeSeats * 12;
  const annualSavings = Math.max(0, nonDiscountedAnnual - totalAnnual);
  const annualSavingsPercent =
    nonDiscountedAnnual > 0 ? Math.round((annualSavings / nonDiscountedAnnual) * 100) : 0;

  return {
    unitPrice,
    totalMonthly,
    totalAnnual,
    annualSavings,
    annualSavingsPercent,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPlanById(id: string): PricingPlan | undefined {
  return PRICING_PLANS.find((p) => p.id === id);
}
