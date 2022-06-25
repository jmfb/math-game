import React, { ReactNode } from 'react';

interface IButtonProps {
	children?: ReactNode;
	className?: string;
	onClick(): void;
}

export function Button({ children, className, onClick }: IButtonProps) {
	return <button {...{ onClick, className }}>{children}</button>;
}
