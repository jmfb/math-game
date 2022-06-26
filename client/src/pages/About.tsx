import React from 'react';
import { ThreeDots } from 'react-loading-icons';
import { useAppSelector } from '~/redux';
import styles from './About.css';

export function About() {
	const projectHref = 'https://github.com/jmfb/math-game';
	const isLoadingVersion = useAppSelector(
		state => state.math.isLoadingVersion
	);
	const clientVersion = useAppSelector(state => state.math.clientVersion);
	return (
		<section>
			<h1>About Math Games</h1>
			<p>
				Math Games was inspired by Mya's love for math and quest to
				continue learning even when not at school.
			</p>
			<p>The source code for this project can be found here:</p>
			<ul>
				<li>
					<a href={projectHref}>{projectHref}</a>
				</li>
			</ul>
			<p className={styles.info}>
				<span className={styles.label}>Version:</span>
				<span className={styles.version}>{clientVersion}</span>
				{isLoadingVersion && (
					<ThreeDots fill='black' className={styles.loading} />
				)}
			</p>
		</section>
	);
}
