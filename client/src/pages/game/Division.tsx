import React from 'react';
import { Game } from './Game';
import { mathService } from '~/services';

export function Division() {
	return <Game createProblem={mathService.createDivisionProblem} />;
}
