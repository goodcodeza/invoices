import { fireEvent, render, screen } from '@testing-library/react';

import Counter from '@/components/sample/counter';

const TEST_IDS = {
	COUNT: 'count',
	BTN_INC: 'inc',
	BTN_DEC: 'dec'
};

describe('<Counter />', () => {
	it('should render', () => {
		render(<Counter />);

		const count = screen.getByTestId(TEST_IDS.COUNT);
		expect(count).toHaveTextContent('0');
	});

	describe('#increment', () => {
		const testCases = [
			{ value: 0, expected: 1, title: 'increment from 0 to 1' },
			{ value: 1, expected: 2, title: 'increment from 1 to 2' }
		];

		testCases.forEach((tc) =>
			it(`${tc.title}`, () => {
				render(<Counter value={tc.value} />);

				const button = screen.getByTestId(TEST_IDS.BTN_INC);
				fireEvent.click(button);

				const count = screen.getByTestId(TEST_IDS.COUNT);
				expect(count).toHaveTextContent(tc.expected.toString());
			})
		);
	});

	describe('#decrement', () => {
		const testCases = [
			{ value: 2, expected: 1, title: 'decrement from 2 to 1' },
			{ value: 1, expected: 0, title: 'decrement from 1 to 0' },
			{ value: 0, expected: 0, title: 'do not decrement when the count is 0' }
		];

		testCases.forEach((tc) =>
			it(`${tc.title}`, () => {
				render(<Counter value={tc.value} />);

				const button = screen.getByTestId(TEST_IDS.BTN_DEC);
				fireEvent.click(button);

				const count = screen.getByTestId(TEST_IDS.COUNT);
				expect(count).toHaveTextContent(tc.expected.toString());
			})
		);

		it('should be disabled when the count is 0', () => {
			render(<Counter value={0} />);

			const button = screen.getByTestId(TEST_IDS.BTN_DEC);
			expect(button).toBeDisabled();
		});
	});
});
