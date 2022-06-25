import React, { useState } from 'react';
import { Equation } from './Equation';
import { Result } from './Result';
import { IProblem } from '~/models';
import { mathService } from '~/services';
import styles from './Problem.css';

interface IProblemProps {
	problem: IProblem;
	onCorrect(): void;
	onWrong(): void;
}

export function Problem({ problem, onCorrect, onWrong }: IProblemProps) {
	const [result, setResult] = useState<number>(null);
	const solution = mathService.calculate(problem);

	const handleTimeout = () => {
		if (result === solution) {
			onCorrect();
		} else {
			onWrong();
		}
		setResult(null);
	};

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.item}>
					<Equation
						{...{ problem }}
						isReadOnly={result !== null}
						onSolve={setResult}
					/>
				</div>
			</div>
			{result !== null && (
				<div className={styles.container}>
					<div className={styles.item}>
						<Result
							{...{ result, solution }}
							onTimeout={handleTimeout}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
