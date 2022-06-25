import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, NotFound } from '~/pages';
import {
	NewGame,
	Addition,
	Subtraction,
	Multiplication,
	Division
} from '~/pages/game';

export default function Router() {
	return (
		<Routes>
			<Route path='/'>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='game'>
					<Route path='new' element={<NewGame />} />
					<Route path='add' element={<Addition />} />
					<Route path='subtract' element={<Subtraction />} />
					<Route path='multiply' element={<Multiplication />} />
					<Route path='divide' element={<Division />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}
