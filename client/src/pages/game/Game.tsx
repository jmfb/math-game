import React, { useState } from 'react';
import { Progress, Problem, GameOver } from '~/components';
import { IProblem } from '~/models';

interface IGameProps {
	createProblem(difficulty: number): IProblem;
}

export function Game({ createProblem }: IGameProps) {
	const totalProblems = 10;
	const [problemNumber, setProblemNumber] = useState(1);
	const [problem, setProblem] = useState(createProblem(1));
	const [correct, setCorrect] = useState(0);
	const [wrong, setWrong] = useState(0);

	const newProblem = () => {
		if (problemNumber === totalProblems) {
			setProblem(null);
		} else {
			setProblemNumber(problemNumber + 1);
			setProblem(createProblem(problemNumber + 1));
		}
	};

	const handleCorrect = () => {
		setCorrect(correct + 1);
		newProblem();
	};

	const handleWrong = () => {
		setWrong(wrong + 1);
		newProblem();
	};

	const handlePlayAgain = () => {
		setProblemNumber(1);
		setProblem(createProblem(1));
		setCorrect(0);
		setWrong(0);
	};

	return (
		<section>
			<Progress {...{ totalProblems, problemNumber, correct, wrong }} />
			{problem ? (
				<Problem
					{...{ problem }}
					onCorrect={handleCorrect}
					onWrong={handleWrong}
				/>
			) : (
				<GameOver {...{ correct }} onPlayAgain={handlePlayAgain} />
			)}
		</section>
	);
}
