import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import About from 'pages/About';
import App from 'App';
import City from 'pages/City';
import Error from 'Error';
import Home from 'pages/Home';
import Location from 'pages/Location';
import reportWebVitals from './reportWebVitals';

import './index.css';

const router = createHashRouter([
	{
		basename: '/RR-Dream',
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/About', element: <About /> },
			{ path: '/City/:cityCode', element: <City /> },
			{ path: '/Home', element: <Home /> },
			{ path: '/Location/:locationCode', element: <Location /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
