import Link from 'next/link';

import { getInvoices } from '@/data/invoice';
import { formatCurrency } from '@/shared/currency';
import { formatDate } from '@/shared/date';

const InvoicesPage = async () => {
	const invoices = await getInvoices();

	return (
		<main className="container mx-auto pt-4">
			<h1 className="pb-4 text-4xl font-bold">Here&apos;s a list of available invoices</h1>
			{invoices.map((invoice) => (
				<section key={invoice.id} className="pb-4">
					<h2 className="text-2xl font-bold underline">
						<Link href={`/invoices/${invoice.id}`}>{invoice.name}</Link>
					</h2>
					<time dateTime={invoice.date}>{formatDate(new Date(invoice.date))}</time>
					<p>
						<span className="text-lg font-bold">Total:</span> {formatCurrency(invoice.total)}
					</p>
				</section>
			))}
		</main>
	);
};

export default InvoicesPage;
