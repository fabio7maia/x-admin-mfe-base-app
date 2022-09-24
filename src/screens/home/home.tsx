import React from 'react';
import { AppHeader } from 'xAdminAuthModule/components/appHeader/index';

export const HomeScreen: React.FC = () => {
	const [accountId, setAccountId] = React.useState();

	return (
		<div style={{ backgroundColor: '#eeeeee', minHeight: '100vh', width: '100vw' }}>
			<AppHeader title="Awesome MFE" />
			<div
				style={{ margin: '50px 20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
			>
				<div style={{ width: 'calc(50vw - 40px)', backgroundColor: 'yellow', minHeight: '50vh' }}>
					Placeholder 1
				</div>
				<div style={{ width: 'calc(50vw - 40px)', backgroundColor: 'orange', minHeight: '50vh' }}>
					Placeholder 2
				</div>
			</div>
			<div
				style={{
					margin: '20px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: 'blue',
				}}
			></div>
			<div style={{ position: 'fixed', bottom: 0, minHeight: '55px', width: '100vw', backgroundColor: 'red' }}>
				Footer
			</div>
		</div>
	);
};
