export enum Operator {
	Plus = '+',
	Minus = '-',
	Times = '*',
	DividedBy = '÷'
}

export interface IProblem {
	arg1: number;
	arg2: number;
	operator: Operator;
}
