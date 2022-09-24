import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '@screens';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/dashboard" element={<HomeScreen />} />
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
};
