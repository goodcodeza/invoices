import { buildInvoice } from '@/shared/invoice';
import { buildPhase } from '@/shared/phase';
import type { CostItem, Invoice, Phase, Tax } from '@/shared/types';

const NO_TAX: Tax = { name: 'No Tax', rate: 0 };
const VAT: Tax = { name: 'Value Added tax', rate: 0.15 };
const GOVERNMENT_LOLZ: Tax = { name: "Minister's new car", rate: 0.5 };

const dates = [
	'2022-01-29T08:00:00.000Z',
	'2022-02-19T08:00:00.000Z',
	'2022-04-02T08:00:00.000Z',
	'2022-04-03T08:00:00.000Z',
	'2022-05-08T08:00:00.000Z'
];

const costItems: CostItem[] = [
	{ id: '0', name: 'Cost Item 0', tax: NO_TAX, unitPrice: 120, units: 10 },
	{ id: '1', name: 'Cost Item 1', tax: NO_TAX, unitPrice: 100, units: 12 },
	{ id: '2', name: 'Cost Item 2', tax: VAT, unitPrice: 120, units: 14 },
	{ id: '3', name: 'Cost Item 3', tax: VAT, unitPrice: 100, units: 16 },
	{ id: '4', name: 'Cost Item 4', tax: GOVERNMENT_LOLZ, unitPrice: 120, units: 18 },
	{ id: '5', name: 'Cost Item 5', tax: GOVERNMENT_LOLZ, unitPrice: 100, units: 20 }
];

const getPhases = (): Phase[] => {
	return [0, 1, 2, 3].map((id) => {
		const items = costItems.slice(id, id + 3);

		return buildPhase(id.toString(), items, `Phase ${id}`);
	});
};

export const invoices: Invoice[] = [0, 1, 2].map((id) => {
	const date = dates[id];
	const name = `Invoice #${id}`;
	const phases: Phase[] = getPhases();

	return buildInvoice(date, id.toString(), name, phases);
});
