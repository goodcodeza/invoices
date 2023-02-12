import Link from 'next/link';

const IndexPage = async () => {
	return (
		<main className="container mx-auto pt-4">
			<h1 className="pb-4 text-4xl font-bold">Hello world!</h1>
			<p>
				Click{' '}
				<Link className="underline" href={'/invoices'}>
					here
				</Link>{' '}
				to view a list of available invoices.
			</p>
		</main>
	);
};

export default IndexPage;
