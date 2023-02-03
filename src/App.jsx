import { Outlet } from 'react-router-dom';

import H1 from 'elements/H1';

import AppHeader from 'layout/AppHeader';
import NavigationBar from 'components/NavigationBar';

import './output.css';
import './App.css';

function App() {
	return (
		<div className="app">
			<AppHeader>
				<H1 className="font-semibold text-rail-white">Texas Rail</H1>
			</AppHeader>
			<NavigationBar />
			<div className="main-content">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
