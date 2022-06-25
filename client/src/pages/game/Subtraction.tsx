import React from 'react';
import { Game } from './Game';
import { mathService } from '~/services';

export function Subtraction() {
	return <Game createProblem={mathService.createSubtractionProblem} />;
}
