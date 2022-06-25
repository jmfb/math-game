import React from 'react';

export function About() {
	const projectHref = 'https://github.com/jmfb/math-game';
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
		</section>
	);
}
