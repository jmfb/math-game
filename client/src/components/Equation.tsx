import React, { useState } from 'react';
import { Operator } from '~/models';
import styles from './Equation.css';

export interface IEquationProps {
	arg1: number;
	arg2: number;
	operator: Operator;
	isReadOnly: boolean;
	onChange(): void;
	onSolve(result: number): void;
}

export function Equation({
	arg1,
	arg2,
	operator,
	isReadOnly,
	onChange,
	onSolve
}: IEquationProps) {
	const [result, setResult] = useState('');

	const handleResultChanged = (event: React.FormEvent<HTMLInputElement>) => {
		onChange();
		setResult(event.currentTarget.value);
	};

	const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setResult((+result).toString());
			onSolve(+result);
		}
	};

	return (
		<div>
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
