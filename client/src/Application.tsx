import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { useInterval } from '~/hooks';
import { ErrorBoundary } from './ErrorBoundary';
import { Loading, ResponsiveLayout } from '~/components';
import { useAppSelector, mathSlice } from '~/redux';
import styles from './Application.css';

const AsyncHeader = React.lazy(() => import('./Header'));
const AsyncRouter = React.lazy(() => import('./Router'));
const AsyncFooter = React.lazy(() => import('./Footer'));

export default function Application() {
	const dispatch = useDispatch();
	const { getVersion } = bindActionCreators(mathSlice.actions, dispatch);

	const clientVersion = useAppSelector(state => state.math.clientVersion);
	const serverVersion = useAppSelector(state => state.math.serverVersion);

	useInterval(() => {
		getVersion();
	}, 10_000);

	useEffect(() => {
		if (serverVersion !== clientVersion) {
			window.location.reload();
		}
	}, [serverVersion, clientVersion]);

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
