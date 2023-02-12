import { gql } from 'graphql-request';

import { Invoice } from '@/shared/types';

import client from './client';

const GetInvoice = gql`
	query GetInvoice($id: ID!) {
		invoice(where: { id: "$id" }) {
			id
			date
			name
			phases {
				costItems {
					id
					name
					tax {
						id
						name
						rate
					}
					units
					unitPrice
				}
				id
				name
				subTotal
				total
				totalTax
			}
			subTotal
			total
			totalTax
		}
	}
`;

type GetInvoiceRes = {
	invoice?: Invoice;
};

export const getInvoice = async (id: string) => {
	const { invoice } = await client.request<GetInvoiceRes>(GetInvoice, { id });

	return invoice;
};

const GetInvoices = gql`
	query GetInvoices {
		invoices {
			date
			id
			name
			total
		}
	}
`;

type GetInvoicesRes = {
	invoices: Pick<Invoice, 'date' | 'id' | 'name' | 'total'>[];
};

export const getInvoices = async () => {
	const { invoices } = await client.request<GetInvoicesRes>(GetInvoices);

	return invoices;
};
