import React from 'react';
import { createRoot } from 'react-dom/client';

const AsyncRoot = React.lazy(
	() => import(/* webpackChunkName: 'Root' */ './Root')
);

function main() {
	const rootElement = document.getElementById('root');
	if (!rootElement) {
		throw new Error('Missing root DOM element.');
	}

	createRoot(rootElement).render(<AsyncRoot />);
}

main();
