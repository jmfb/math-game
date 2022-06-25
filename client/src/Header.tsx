import React from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveLayout } from '~/components';
import cx from 'classnames';
import styles from './Header.css';

export default function Header() {
	return (
		<nav className={styles.root}>
			<ResponsiveLayout>
				<div className={styles.container}>
					<ul className={styles.links}>
						<li className={styles.link}>
							<Link to='/'>Home</Link>
						</li>
					</ul>
					<ul className={cx(styles.links, styles.secondary)}>
						<li className={styles.link}>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</div>
			</ResponsiveLayout>
		</nav>
	);
}
