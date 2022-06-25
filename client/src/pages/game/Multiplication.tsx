import React from 'react';
import { Game } from './Game';
import { mathService } from '~/services';

export function Multiplication() {
	return <Game createProblem={mathService.createMultiplicationProblem} />;
}
