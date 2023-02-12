import { buildPhase } from '@/shared/phase';
import { CostItem } from '@/shared/types';

describe('#buildPhase', () => {
	const id = 'test-phase-id';
	const name = 'test-phase-name';
	const costItems: CostItem[] = [
		{
			id: 'test-cost-item-id',
			name: 'test-cost-item-name',
			tax: { name: 'test-tax-name', rate: 0.25 },
			unitPrice: 10,
			units: 5
		},
		{
			id: 'test-cost-item-id',
			name: 'test-cost-item-name',
			tax: { name: 'test-tax-name', rate: 0.5 },
			unitPrice: 0.5,
			units: 20
		}
	];

	it('should calculate the subtotal with no cost items', () => {
		const { subTotal } = buildPhase(id, [], name);

		expect(subTotal).toEqual(0);
	});

	it('should calculate the subtotal with some cost items', () => {
		const { subTotal } = buildPhase(id, costItems, name);

		expect(subTotal).toEqual(60);
	});

	it('should calculate the total tax with some cost items', () => {
		const { totalTax } = buildPhase(id, costItems, name);

		expect(totalTax).toEqual(17.5);
	});
});
