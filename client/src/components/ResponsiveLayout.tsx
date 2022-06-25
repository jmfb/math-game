import React, { ReactNode } from 'react';
import styles from './ResponsiveLayout.css';

interface IResponsiveLayoutProps {
	children?: ReactNode;
}

export function ResponsiveLayout({ children }: IResponsiveLayoutProps) {
	return (
		<div className={styles.root}>
			<div className={styles.layout}>{children}</div>
		</div>
	);
}
