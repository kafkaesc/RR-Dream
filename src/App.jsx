import { Outlet } from 'react-router-dom';

import H1 from 'elements/H1';

import AppHeader from 'components/AppHeader';

import './output.css';
import './App.css';

function App() {
	return (
		<div className="app">
			<AppHeader>
				<H1 className="font-semibold">Texas Rail</H1>
			</AppHeader>
			<div className="main-content">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
