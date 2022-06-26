import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createStore } from '~/redux';

const AsyncApplication = React.lazy(() => import('./Application'));

function main() {
	const rootElement = document.getElementById('root');
	if (!rootElement) {
		throw new Error('Missing root DOM element.');
	}

	const store = createStore();
	const rootComponent = (
		<Provider {...{ store }}>
			<AsyncApplication />
		</Provider>
	);

	createRoot(rootElement).render(rootComponent);
}

main();
