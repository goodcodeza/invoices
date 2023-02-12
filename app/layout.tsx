import { type ReactNode } from 'react';

import './globals.css';

if (process.env.NEXT_PUBLIC_MOCK_API === 'enabled') {
	require('../mocks');
}

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
