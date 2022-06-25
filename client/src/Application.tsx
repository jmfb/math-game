import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { Loading, ResponsiveLayout } from '~/components';
import styles from './Application.css';

const AsyncHeader = React.lazy(() => import('./Header'));
const AsyncRouter = React.lazy(() => import('./Router'));
const AsyncFooter = React.lazy(() => import('./Footer'));

export default function Application() {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<AsyncHeader />
					<ResponsiveLayout>
						<main className={styles.main}>
							<AsyncRouter />
						</main>
					</ResponsiveLayout>
					<AsyncFooter />
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}
