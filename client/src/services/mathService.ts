import { Operator } from '~/models';

export function calculate(arg1: number, arg2: number, operator: Operator) {
	switch (operator) {
		case '+':
			return arg1 + arg2;
		case '-':
			return arg1 - arg2;
		case '*':
			return arg1 * arg2;
		case '/':
			return arg1 / arg2;
		default:
			throw new Error(`Invalid operator: ${operator}`);
	}
}
