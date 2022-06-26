import { createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from './IState';
import * as hub from './math.hub';

export const getVersion = createAsyncThunk(
	'math/getVersion',
	async () => {
		return await hub.getVersion();
	},
	{
		condition(_, { getState }) {
			const {
				math: { isLoadingVersion }
			} = getState() as IState;
			if (isLoadingVersion) {
				return false;
			}
		}
	}
);
