import { getTax } from './tax';
import type { CostItem } from './types';

export const getCostItemTotals = (costItem: CostItem) => {
	const subTotal = costItem.units * costItem.unitPrice;
	const totalTax = getTax(subTotal, costItem.tax);

	return { subTotal, totalTax };
};
