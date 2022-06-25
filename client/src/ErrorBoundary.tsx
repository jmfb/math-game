import React, { Component, ReactNode, ErrorInfo } from 'react';
import { ErrorView } from '~/pages';

interface IErrorBoundaryProps {
	children?: ReactNode;
}

interface IErrorBoundaryState {
	error?: Error;
}

export class ErrorBoundary extends Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props);
		this.state = {};
	}

	static getDerivedStateFromError(error: Error) {
		return { error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	render() {
		const { error } = this.state;
		if (error) {
			return (
				<ErrorView {...{ error }} onDismiss={this.handleDismissed} />
			);
		}

		const { children } = this.props;
		return children;
	}

	handleDismissed = () => {
		this.setState({ error: undefined });
	};
}
