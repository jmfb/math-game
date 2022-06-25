import React from 'react';
import { createRoot } from 'react-dom/client';

const AsyncApplication = React.lazy(() => import('./Application'));

function main() {
	const rootElement = document.getElementById('root');
	if (!rootElement) {
		throw new Error('Missing root DOM element.');
	}

	createRoot(rootElement).render(<AsyncApplication />);
}

main();
