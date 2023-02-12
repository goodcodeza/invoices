import { formatCurrency } from '@/shared/currency';
import { formatTaxRate } from '@/shared/tax';
import type { Phase as PhaseModel } from '@/shared/types';

const Phase = ({ phase }: PhaseProps) => {
	const { costItems, name, subTotal, total, totalTax } = phase;

	return (
		<section className="grid grid-cols-4 border-b-2 border-solid py-4">
			<h2 className="col-span-4 text-lg font-bold">{name}</h2>
			<section className="col-span-4 contents">
				<div className="text-start font-bold">Description</div>
				<div className="text-center font-bold">Tax Rate</div>
				<div className="text-center font-bold">Hours/Units</div>
				<div className="text-end font-bold">Price</div>
			</section>
			{costItems.map((item) => (
				<section key={item.id} className="col-span-4 contents">
					<div className="text-start">{item.name}</div>
					<div className="text-center">{formatTaxRate(item.tax.rate)}</div>
					<div className="text-center">{item.units}</div>
					<div className="text-end">{formatCurrency(item.unitPrice)}</div>
				</section>
			))}
			<section className="col-span-4 contents">
				<section className="col-span-4 contents">
					<div className="col-span-2"></div>
					<div className="text-center font-bold">Sub total</div>
					<div className="text-end font-bold">{formatCurrency(subTotal)}</div>
				</section>
				<section className="col-span-4 contents">
					<div className="col-span-2"></div>
					<div className="text-center font-bold">Tax</div>
					<div className="text-end font-bold">{formatCurrency(totalTax)}</div>
				</section>
				<section className="col-span-4 contents">
					<div className="col-span-2"></div>
					<div className="text-center font-bold">Total</div>
					<div className="text-end font-bold">{formatCurrency(total)}</div>
				</section>
			</section>
		</section>
	);
};

export default Phase;

export type PhaseProps = {
	phase: PhaseModel;
};
