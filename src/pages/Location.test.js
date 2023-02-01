import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Location from './Location';

const LocationAndPath = ({ locationCode }) => {
	return (
		<MemoryRouter initialEntries={[`/Location/${locationCode}`]}>
			<Routes>
				<Route path={'/Location/:locationCode'} element={<Location />} />
			</Routes>
		</MemoryRouter>
	);
};

test('Jeng-Chi Loads', () => {
	render(<LocationAndPath locationCode="JENGC" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent('Jeng-Chi');
});

test('The GDC Loads', () => {
	render(<LocationAndPath locationCode="UTGDC" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent('Gates-Dell Complex');
});

test('Celorio Loads', () => {
	render(<LocationAndPath locationCode="CELOR" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent('Celorio');
});

test('RYDE Loads', () => {
	render(<LocationAndPath locationCode="RYDEG" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent('RYDE');
});

test("Valentine's Bakery Loads", () => {
	render(<LocationAndPath locationCode="VALEN" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent("Valentine's");
});

test('Invalid Location Error', () => {
	render(<LocationAndPath locationCode="Tacodeli" />);
	const locationHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(locationHeaderElement).toBeInTheDocument();
	expect(locationHeaderElement).toHaveTextContent(
		/there was a problem loading the page/i
	);
});
