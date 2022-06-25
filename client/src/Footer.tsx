import React from 'react';
import styles from './Footer.css';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				&copy; 2020 - {year}, Jacob Buysse
			</div>
		</footer>
	);
}
