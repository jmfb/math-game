import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewGame.css';

export function NewGame() {
	return (
		<section>
			<h1 className={styles.title}>New Game</h1>
			<div className={styles.links}>
				<Link to='/game/add'>Addition</Link>
				<Link to='/game/subtract'>Subtraction</Link>
				<Link to='/game/multiply'>Multiplication</Link>
				<Link to='/game/divide'>Division</Link>
			</div>
		</section>
	);
}
