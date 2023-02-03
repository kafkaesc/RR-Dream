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
	const cityHeader = screen.getByRole('heading', { level: 2 });
	expect(cityHeader).toBeInTheDocument();
	expect(cityHeader).toHaveTextContent(/dallas/i);
});

it('Loads Austin', () => {
	render(<CityAndPath cityCode="AUS" />);
	const cityHeader = screen.getByRole('heading', { level: 2 });
	expect(cityHeader).toBeInTheDocument();
	expect(cityHeader).toHaveTextContent(/austin/i);
});

it('Loads San Antonio', () => {
	render(<CityAndPath cityCode="SAN" />);
	const cityHeader = screen.getByRole('heading', { level: 2 });
	expect(cityHeader).toBeInTheDocument();
	expect(cityHeader).toHaveTextContent(/san antonio/i);
});

it('Loads Houston', () => {
	render(<CityAndPath cityCode="HOU" />);
	const cityHeader = screen.getByRole('heading', { level: 2 });
	expect(cityHeader).toBeInTheDocument();
	expect(cityHeader).toHaveTextContent(/houston/i);
});

it('Loads El Paso', () => {
	render(<CityAndPath cityCode="ELP" />);
	const cityHeader = screen.getByRole('heading', { level: 2 });
	expect(cityHeader).toBeInTheDocument();
	expect(cityHeader).toHaveTextContent(/el paso/i);
});

it('Handles Invalid cityCode Props', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(<CityAndPath cityCode="OKL" />);
	const cityHeader = screen.getByRole('heading', { level: 2 });
	expect(cityHeader).toBeInTheDocument();
	expect(cityHeader).toHaveTextContent(/there was a problem loading the page/i);

	console.error = errorObject;
});
