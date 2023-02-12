import type { Invoice, Phase } from './types';

export const buildInvoice = (date: string, id: string, name: string, phases: Phase[]): Invoice => {
	const { subTotal, totalTax } = getInvoiceTotals(phases);
	const total = subTotal + totalTax;

	return {
		date,
		id,
		name,
		phases,
		subTotal,
		total,
		totalTax
	};
};

const getInvoiceTotals = (phases: Phase[]) => {
	return phases.reduce(
		(totals, phase) => {
			const { subTotal, totalTax } = phase;

			return {
				subTotal: totals.subTotal + subTotal,
				totalTax: totals.totalTax + totalTax
			};
		},
		{ subTotal: 0, totalTax: 0 }
	);
};
