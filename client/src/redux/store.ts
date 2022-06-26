import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { mathSlice } from './math.slice';
import { IState } from './IState';

export function createStore() {
	return configureStore<IState>({
		reducer: {
			[mathSlice.name]: mathSlice.reducer
		}
	});
}

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
