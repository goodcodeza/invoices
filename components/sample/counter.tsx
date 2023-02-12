import { useState } from 'react';

const Counter = ({ value }: Props) => {
	const [count, setCount] = useState(value ?? 0);

	return (
		<>
			<button
				data-testid="dec"
				disabled={count === 0}
				onClick={() => setCount((c) => (c ? c - 1 : c))}
			>
				+
			</button>
			<span data-testid="count">{count}</span>
			<button data-testid="inc" onClick={() => setCount((c) => c + 1)}>
				+
			</button>
		</>
	);
};

export default Counter;

type Props = {
	value?: number;
};
