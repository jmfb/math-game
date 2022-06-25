import React, { ReactNode } from 'react';

interface IButtonProps {
	children?: ReactNode;
	onClick(): void;
}

export function Button({ children, onClick }: IButtonProps) {
	return <button {...{ onClick }}>{children}</button>;
}
