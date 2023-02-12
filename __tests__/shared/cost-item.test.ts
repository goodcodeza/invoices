import { getCostItemTotals } from '@/shared/cost-item';
import { CostItem } from '@/shared/types';

describe('#getCostItemTotals', () => {
	const costItem: CostItem = {
		id: 'test-id',
		name: 'test-cost-item',
		tax: {
			name: 'test-tax',
			rate: 0.15
		},
		unitPrice: 10,
		units: 10
	};

	it('should calculate the cost before applying tax', () => {
		const expected = 100;

		const { subTotal } = getCostItemTotals(costItem);

		expect(subTotal).toEqual(expected);
	});

	it('should return the applicable tax', () => {
		const expected = 15;

		const { totalTax } = getCostItemTotals(costItem);

		expect(totalTax).toEqual(expected);
	});
});
