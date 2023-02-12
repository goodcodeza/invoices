import { graphql } from 'msw';

import { invoices } from './data';

export const handlers = [
	graphql.query('GetInvoice', (req, res, ctx) => {
		const { id } = req.variables;

		return res(
			ctx.data({
				invoice: invoices.find((invoice) => invoice.id === id)
			})
		);
	}),
	graphql.query('GetInvoices', (_req, res, ctx) => {
		return res(
			ctx.data({
				invoices: invoices.map(({ date, id, name, total }) => ({ date, id, name, total }))
			})
		);
	})
];
