import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export function Home() {
	return (
		<section>
			<h1 className={styles.title}>Math Games</h1>
			<div className={styles.links}>
				<Link to='/game/new'>New Game</Link>
			</div>
		</section>
	);
}
