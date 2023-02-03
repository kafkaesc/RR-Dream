import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Location from './Location';

function LocationAndPath({ locationCode }) {
	return (
		<MemoryRouter initialEntries={[`/Location/${locationCode}`]}>
			<Routes>
				<Route path={'/Location/:locationCode'} element={<Location />} />
			</Routes>
		</MemoryRouter>
	);
}

it('Loads Jeng-Chi', () => {
	render(<LocationAndPath locationCode="JENGC" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(/jeng-chi/i);
});

it('Loads The GDC', () => {
	render(<LocationAndPath locationCode="UTGDC" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(/gates-dell complex/i);
});

it('Loads Celorio', () => {
	render(<LocationAndPath locationCode="CELOR" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(/celorio/i);
});

it('Loads RYDE', () => {
	render(<LocationAndPath locationCode="RYDEG" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(/ryde/i);
});

it("Loads Valentine's Bakery", () => {
	render(<LocationAndPath locationCode="VALEN" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(/valentine's/i);
});

it('Handles Invalid locationCode Props', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(<LocationAndPath locationCode="Tacodeli" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(
		/there was a problem loading the page/i
	);

	console.error = errorObject;
});
