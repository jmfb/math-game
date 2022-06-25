import { useRef, useEffect } from 'react';

type Action = () => void;

export function useTimeout(callback: Action, timeout: number) {
	const callbackRef = useRef<Action>();

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const timeoutId = window.setTimeout(
			() => callbackRef.current(),
			timeout
		);
		return () => window.clearTimeout(timeoutId);
	}, [timeout]);
}
