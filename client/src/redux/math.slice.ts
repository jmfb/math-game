import { createSlice } from '@reduxjs/toolkit';
import { getVersion } from './math.actions';

export interface IMathState {
	isLoadingVersion: boolean;
	clientVersion: string;
	serverVersion: string;
}

function getClientVersion() {
	const rootElement = document.getElementById('root');
	if (!rootElement) {
		throw new Error('Missing root element');
	}
	const bundleVersion = rootElement.getAttribute('data-bundle-version');
	if (!bundleVersion) {
		throw new Error('Missing data-bundle-version attribute');
	}
	return (bundleVersion as string).trim();
}

const clientVersion = getClientVersion();

const initialState: IMathState = {
	isLoadingVersion: false,
	clientVersion,
	serverVersion: clientVersion
};

const slice = createSlice({
	name: 'math',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(getVersion.pending, state => {
				state.isLoadingVersion = true;
			})
			.addCase(getVersion.fulfilled, (state, action) => {
				state.isLoadingVersion = false;
				state.serverVersion = action.payload;
			})
			.addCase(getVersion.rejected, (state, action) => {
				state.isLoadingVersion = false;
				console.error(action.error.message);
			})
});

export const mathSlice = {
	...slice,
	actions: {
		...slice.actions,
		getVersion
	}
};
