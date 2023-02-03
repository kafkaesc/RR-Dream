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
	const locationHeader = screen.getByRole('heading', { level: 2 });
	expect(locationHeader).toBeInTheDocument();
	expect(locationHeader).toHaveTextContent(/jeng-chi/i);
});

it('Loads The GDC', () => {
	render(<LocationAndPath locationCode="UTGDC" />);
	const locationHeader = screen.getByRole('heading', { level: 2 });
	expect(locationHeader).toBeInTheDocument();
	expect(locationHeader).toHaveTextContent(/gates-dell complex/i);
});

it('Loads Celorio', () => {
	render(<LocationAndPath locationCode="CELOR" />);
	const locationHeader = screen.getByRole('heading', { level: 2 });
	expect(locationHeader).toBeInTheDocument();
	expect(locationHeader).toHaveTextContent(/celorio/i);
});

it('Loads RYDE', () => {
	render(<LocationAndPath locationCode="RYDEG" />);
	const locationHeader = screen.getByRole('heading', { level: 2 });
	expect(locationHeader).toBeInTheDocument();
	expect(locationHeader).toHaveTextContent(/ryde/i);
});

it("Loads Valentine's Bakery", () => {
	render(<LocationAndPath locationCode="VALEN" />);
	const locationHeader = screen.getByRole('heading', { level: 2 });
	expect(locationHeader).toBeInTheDocument();
	expect(locationHeader).toHaveTextContent(/valentine's/i);
});

it('Handles Invalid locationCode Props', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(<LocationAndPath locationCode="Tacodeli" />);
	const locationHeader = screen.getByRole('heading', { level: 2 });
	expect(locationHeader).toBeInTheDocument();
	expect(locationHeader).toHaveTextContent(
		/there was a problem loading the page/i
	);

	console.error = errorObject;
});
