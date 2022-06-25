import React from 'react';
import { Game } from './Game';
import { mathService } from '~/services';

export function Addition() {
	return <Game createProblem={mathService.createAdditionProblem} />;
}
