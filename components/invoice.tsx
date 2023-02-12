import { formatCurrency } from '@/shared/currency';
import { formatDate } from '@/shared/date';
import type { Invoice as InvoiceModel } from '@/shared/types';

import Phase from './phase';

const Invoice = ({ invoice }: InvoiceProps) => {
	const { date, name, phases, subTotal, total, totalTax } = invoice;

	return (
		<article>
			<h1 className="pb-4 text-4xl font-bold">{name}</h1>
			<time className="block" dateTime={date}>
				{formatDate(new Date(date))}
			</time>
			{phases.map((phase) => (
				<Phase key={phase.id} phase={phase} />
			))}
			<section className="grid grid-cols-4 pt-4">
				<section className="contents">
					<div className="col-span-2"></div>
					<div className="text-center text-lg font-bold">Sub Total</div>
					<div className="text-end text-lg font-bold">{formatCurrency(subTotal)}</div>
				</section>
				<section className="contents">
					<div className="col-span-2"></div>
					<div className="text-center text-lg font-bold">Tax</div>
					<div className="text-end text-lg font-bold">{formatCurrency(totalTax)}</div>
				</section>
				<section className="contents">
					<div className="col-span-2"></div>
					<div className="text-center text-lg font-bold">Total</div>
					<div className="text-end text-lg font-bold">{formatCurrency(total)}</div>
				</section>
			</section>
		</article>
	);
};

export default Invoice;

export type InvoiceProps = {
	invoice: InvoiceModel;
};
