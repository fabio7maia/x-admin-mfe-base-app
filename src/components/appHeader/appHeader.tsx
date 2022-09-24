import React from 'react';
import { Link } from 'react-router-dom';

export const AppHeader: React.FC = () => {
	const language = 'PT';

	const handleOnChangeLanguage = React.useCallback((evt): void => {}, []);

	return (
		<>
			<div
				style={{
					position: 'fixed',
					top: 0,
					minHeight: '55px',
					width: 'calc(100vw - 60px)',
					backgroundColor: 'red',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '0 30px',
				}}
			>
				<Link to="/dashboard">Dashboard</Link>
				<select value={language} onChange={handleOnChangeLanguage}>
					<option value="en">EN</option>
					<option value="pt">PT</option>
				</select>
			</div>
			<div style={{ height: '55px' }}></div>
		</>
	);
};
