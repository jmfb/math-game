import { Operator, IProblem } from '~/models';

export function getNext(min: number, max: number) {
	const count = max - min + 1;
	return Math.floor(Math.random() * (count + 1)) + min;
}

export function createAdditionProblem(difficulty: number) {
	const operator = Operator.Plus;
	switch (difficulty) {
		case 1:
		case 2:
			return { arg1: getNext(0, 9), arg2: getNext(0, 9), operator };
		case 3:
		case 4:
			return { arg1: getNext(10, 29), arg2: getNext(0, 9), operator };
		case 5:
		case 6:
			return { arg1: getNext(10, 39), arg2: getNext(0, 19), operator };
		case 7:
		case 8:
			return { arg1: getNext(10, 99), arg2: getNext(10, 99), operator };
		case 9:
		case 10:
			return {
				arg1: getNext(100, 299),
				arg2: getNext(10, 199),
				operator
			};
		default:
			throw new Error(`Invalid difficulty: ${difficulty}`);
	}
}

export function createSubtractionProblem(difficulty: number) {
	const problem = createAdditionProblem(difficulty);
	const solution = calculate(problem);
	return { arg1: solution, arg2: problem.arg2, operator: Operator.Minus };
}

export function createMultiplicationProblem(difficulty: number) {
	const operator = Operator.Times;
	switch (difficulty) {
		case 1:
		case 2:
			return { arg1: getNext(1, 5), arg2: getNext(1, 5), operator };
		case 3:
		case 4:
			return { arg1: getNext(2, 9), arg2: getNext(2, 9), operator };
		case 5:
		case 6:
			return { arg1: getNext(10, 20), arg2: getNext(1, 5), operator };
		case 7:
		case 8:
			return { arg1: getNext(10, 20), arg2: getNext(2, 9), operator };
		case 9:
		case 10:
			return { arg1: getNext(20, 40), arg2: getNext(10, 20), operator };
		default:
			throw new Error(`Invalid difficulty: ${difficulty}`);
	}
}

export function createDivisionProblem(difficulty: number) {
	const problem = createMultiplicationProblem(difficulty);
	const solution = calculate(problem);
	return { arg1: solution, arg2: problem.arg2, operator: Operator.DividedBy };
}

export function calculate({ arg1, arg2, operator }: IProblem) {
	switch (operator) {
		case '+':
			return arg1 + arg2;
		case '-':
			return arg1 - arg2;
		case '*':
			return arg1 * arg2;
		case '÷':
			return arg1 / arg2;
		default:
			throw new Error(`Invalid operator: ${operator}`);
	}
}
