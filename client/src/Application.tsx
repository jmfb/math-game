import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { Loading } from '~/components';

export default function Application() {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<div>Hello World</div>
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}
