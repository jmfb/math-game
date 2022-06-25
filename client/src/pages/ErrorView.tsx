import React from 'react';
import { Button } from '~/components';

interface IErrorViewProps {
	error: Error;
	onDismiss(): void;
}

export function ErrorView({ error, onDismiss }: IErrorViewProps) {
	const { message, name, cause, stack } = error;
	return (
		<main>
			<h1>{name ?? 'Error'}</h1>
			{message && (
				<div>
					<code>{message}</code>
				</div>
			)}
			<Button onClick={onDismiss}>Dismiss</Button>
			{cause && (
				<>
					<h3>Cause</h3>
					<code>{cause.message}</code>
				</>
			)}
			{stack && (
				<>
					<h3>Stack</h3>
					<code>{stack}</code>
				</>
			)}
		</main>
	);
}
