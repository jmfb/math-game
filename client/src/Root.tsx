import React, { useState } from 'react';
import { Equation } from '~/components';
import { Operator } from '~/models';

export default function Root() {
	const [isCorrect, setIsCorrect] = useState(false);
	const [isWrong, setIsWrong] = useState(false);

	const handleChanged = () => {
		setIsWrong(false);
	};

	const handleSolved = (result: number) => {
		const resultIsCorrect = result === 25;
		setIsCorrect(resultIsCorrect);
		setIsWrong(!resultIsCorrect);
	};

	return (
		<>
			<Equation
				arg1={20}
				arg2={5}
				operator={Operator.Plus}
				isReadOnly={isCorrect}
				onChange={handleChanged}
				onSolve={handleSolved}
			/>
			{isCorrect && <div>Correct!</div>}
			{isWrong && <div>Not quite. Try again.</div>}
		</>
	);
}
