import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import styles from './GameOver.css';

interface IGameOverProps {
	correct: number;
	onPlayAgain(): void;
}

export function GameOver({ correct, onPlayAgain }: IGameOverProps) {
	const descriptions = [
		'Oh no! You did not get any correct. I know you can do better next time.',
		'Well, at least you got one correct. Better luck next time.',
		'You got a couple ones correct. Brush up on those skills and try again.',
		'You got a few ones correct. Practice makes perfect. Keep trying.',
		'Getting there. Make sure to take your time when answering.',
		'Half and half. Let us see if you cannot do better next time.',
		'More correct than not. Try perfecting your skills next time.',
		'Not bad. Try slowing down next time and I think you can do better.',
		'Nice job! Only two wrong answers. Still room for some improvement.',
		'Great job! You only missed one. You can get a perfect score next time.',
		'Huzzah! You got them all correct. You are a natural.'
	];
	return (
		<div>
			<h3 className={styles['game-over']}>Game Over</h3>
			<h4 className={styles.description}>{descriptions[correct]}</h4>
			<div className={styles.actions}>
				<Button className={styles['play-again']} onClick={onPlayAgain}>
					Play Again
				</Button>
				<Link to='/' className={styles.return}>
					Return Home
				</Link>
			</div>
		</div>
	);
}
