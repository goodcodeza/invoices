export type Invoice = {
	id: string;
	date: string;
	name: string;
	phases: Phase[];
	subTotal: number;
	total: number;
	totalTax: number;
};

export type Phase = {
	costItems: CostItem[];
	id: string;
	name: string;
	subTotal: number;
	total: number;
	totalTax: number;
};

export type CostItem = {
	id: string;
	name: string;
	tax: Tax;
	units: number;
	unitPrice: number;
};

export type Tax = {
	name: string;
	rate: number;
};
