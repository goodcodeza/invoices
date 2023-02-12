import Invoice from '@/components/invoice';
import { getInvoice } from '@/data/invoice';

const InvoicePage = async ({ params }: Props) => {
	const { id } = params;
	const invoice = await getInvoice(id);

	if (!invoice) {
		throw new Response('Not found', { status: 404 });
	}

	return (
		<main className="container mx-auto max-w-4xl pt-4">
			<Invoice invoice={invoice} />
		</main>
	);
};

export default InvoicePage;

type Props = {
	params: {
		id: string;
	};
};
