import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import City from './City';

const CityAndPath = ({ cityCode }) => {
	return (
		<MemoryRouter initialEntries={[`/City/${cityCode}`]}>
			<Routes>
				<Route path={'/City/:cityCode'} element={<City />} />
			</Routes>
		</MemoryRouter>
	);
};

test('Dallas Loads', () => {
	render(<CityAndPath cityCode="DAL" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent('Dallas');
});

test('Austin Loads', () => {
	render(<CityAndPath cityCode="AUS" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent('Austin');
});

test('San Antonio Loads', () => {
	render(<CityAndPath cityCode="SAN" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent('San Antonio');
});

test('Houston Loads', () => {
	render(<CityAndPath cityCode="HOU" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent('Houston');
});

test('El Paso Loads', () => {
	render(<CityAndPath cityCode="ELP" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent('El Paso');
});

test('Oklahoma City Fails', () => {
	render(<CityAndPath cityCode="OKL" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(
		/there was a problem loading the page/i
	);
});

// Not used here but could be useful testing for thrown errors later.
/*
test('Invalid City Throws Error', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	expect(() => render(<CityAndPath cityCode="OKL" />)).toThrow(
		"Cannot read properties of undefined (reading 'id')"
	);

	console.error = errorObject;
});
*/
