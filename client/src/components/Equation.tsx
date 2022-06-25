import React, { useEffect, useState } from 'react';
import { IProblem } from '~/models';
import styles from './Equation.css';

export interface IEquationProps {
	problem: IProblem;
	isReadOnly?: boolean;
	onChange?(): void;
	onSolve(result: number): void;
}

export function Equation({
	problem,
	isReadOnly,
	onChange,
	onSolve
}: IEquationProps) {
	const [result, setResult] = useState('');

	useEffect(() => {
		setResult('');
	}, [problem]);

	const handleResultChanged = (event: React.FormEvent<HTMLInputElement>) => {
		onChange?.();
		setResult(event.currentTarget.value);
	};

	const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setResult((+result).toString());
			onSolve(+result);
		}
	};

	const { arg1, arg2, operator } = problem;
	return (
		<div className={styles.root}>
			<div className={styles['top-box']}>
				<div className={styles.operator}>{operator}</div>
				<div className={styles.arguments}>
					<div>{arg1}</div>
					<div>{arg2}</div>
				</div>
			</div>
			<div>
				<input
					autoFocus
					className={styles.input}
					type='number'
					value={result}
					readOnly={isReadOnly}
					onChange={handleResultChanged}
					onKeyPress={handleKeyPressed}
				/>
			</div>
		</div>
	);
}
