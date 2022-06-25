import React from 'react';
import { useTimeout } from '~/hooks';
import styles from './Result.css';

interface IResultProps {
	result: number;
	solution: number;
	onTimeout(): void;
}

export function Result({ result, solution, onTimeout }: IResultProps) {
	const isCorrect = result === solution;
	const timeout = isCorrect ? 500 : 3_000;
	useTimeout(onTimeout, timeout);
	return isCorrect ? (
		<div className={styles.correct}>Correct!</div>
	) : (
		<div className={styles.wrong}>
			Wrong. The correct answer is {solution}.
		</div>
	);
}
