import type { Tax } from './types';

export const formatTaxRate = (rate: number) => {
	return `${rate * 100}%`;
};

export const getTax = (amount: number, { rate }: Tax) => {
	return rate * amount;
};
