import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
	return (
		<section>
			<h1>404 - Not Found</h1>
			<p>
				The page you were looking for has moved or could not be found.
			</p>
			<p>
				<Link to='/'>Return Home</Link>
			</p>
		</section>
	);
}
