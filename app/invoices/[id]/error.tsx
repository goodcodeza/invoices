'use client';

// Error components must be Client components
import Link from 'next/link';
import { useEffect } from 'react';

const Error = ({ error }: Props) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className="container mx-auto pt-4">
			<h1 className="pb-4 text-4xl font-bold">Well, that wasn&apos;t supposed to happen</h1>
			<p>
				Click{' '}
				<Link className="underline" href="/invoices">
					here
				</Link>{' '}
				to go back to the invoices page
			</p>
		</main>
	);
};

export default Error;

type Props = {
	error: Error;
	reset: () => void;
};
