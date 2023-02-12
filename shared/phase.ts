import { getCostItemTotals } from './cost-item';
import type { CostItem, Phase } from './types';

export const buildPhase = (id: string, costItems: CostItem[], name: string): Phase => {
	const { subTotal, totalTax } = getPhaseTotals(costItems);
	const total = subTotal + totalTax;

	return {
		costItems,
		id,
		name,
		subTotal,
		total,
		totalTax
	};
};

const getPhaseTotals = (costItems: CostItem[]) => {
	return costItems.reduce(
		(totals, item) => {
			const { subTotal, totalTax } = getCostItemTotals(item);

			return {
				subTotal: totals.subTotal + subTotal,
				totalTax: totals.totalTax + totalTax
			};
		},
		{ subTotal: 0, totalTax: 0 }
	);
};
