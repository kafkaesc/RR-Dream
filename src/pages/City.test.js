import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import City from './City';

function CityAndPath({ cityCode }) {
	return (
		<MemoryRouter initialEntries={[`/City/${cityCode}`]}>
			<Routes>
				<Route path={'/City/:cityCode'} element={<City />} />
			</Routes>
		</MemoryRouter>
	);
}

it('Loads Dallas', () => {
	render(<CityAndPath cityCode="DAL" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(/dallas/i);
});

it('Loads Austin', () => {
	render(<CityAndPath cityCode="AUS" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(/austin/i);
});

it('Loads San Antonio', () => {
	render(<CityAndPath cityCode="SAN" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(/san antonio/i);
});

it('Loads Houston', () => {
	render(<CityAndPath cityCode="HOU" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(/houston/i);
});

it('Loads El Paso', () => {
	render(<CityAndPath cityCode="ELP" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(/el paso/i);
});

it('Handles Invalid cityCode Props', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(<CityAndPath cityCode="OKL" />);
	const cityHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(cityHeaderElement).toBeInTheDocument();
	expect(cityHeaderElement).toHaveTextContent(
		/there was a problem loading the page/i
	);

	console.error = errorObject;
});
