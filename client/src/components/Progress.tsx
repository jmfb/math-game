import React from 'react';
import styles from './Progress.css';

interface IProgressProps {
	totalProblems: number;
	problemNumber: number;
	correct: number;
	wrong: number;
}

export function Progress({
	totalProblems,
	problemNumber,
	correct,
	wrong
}: IProgressProps) {
	return (
		<div className={styles.root}>
			<div className={styles.progress}>
				Problem {problemNumber} of {totalProblems}
			</div>
			<div className={styles.correct}>
				<div className={styles.number}>{correct}</div>
				<div className={styles.label}>Correct</div>
			</div>
			<div className={styles.wrong}>
				<div className={styles.number}>{wrong}</div>
				<div className={styles.label}>Wrong</div>
			</div>
		</div>
	);
}
