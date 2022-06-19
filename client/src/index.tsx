import React from 'react';
import { createRoot } from 'react-dom/client';

function main() {
	const rootElement = document.getElementById('root');
	if (!rootElement) {
		throw new Error('Missing root DOM element.');
	}

	const rootComponent = <div>Hello World</div>;
	createRoot(rootElement).render(rootComponent);
}

main();
