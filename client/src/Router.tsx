import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About } from '~/pages';

export default function Router() {
	return (
		<Routes>
			<Route path='/'>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
			</Route>
		</Routes>
	);
}
