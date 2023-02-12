import { getTax } from '@/shared/tax';

describe('#getTax', () => {
	const testsCases = [
		{
			title: 'should not apply a 0% tax rate',
			amount: 1200,
			tax: {
				name: 'test tax',
				rate: 0
			},
			expected: 0
		},
		{
			title: 'should apply a positive tax rate',
			amount: 1200,
			tax: {
				name: 'test tax',
				rate: 0.1
			},
			expected: 120
		}
	];

	testsCases.forEach((tc) =>
		it(`${tc.title}`, () => {
			const actual = getTax(tc.amount, tc.tax);

			expect(actual).toEqual(tc.expected);
		})
	);
});
