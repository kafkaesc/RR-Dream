import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LocationList from './LocationList';

const dummyLocations = [
	{
		address: '2317 Speedway, Austin, TX 78712',
		cityId: 30002,
		id: 120004,
		locationCode: 'UTGDC',
		name: 'The Gates-Dell Complex at The University of Texas',
		shortName: 'The GDC',
	},
	{
		address: '2332 Culebra Rd, San Antonio, TX 78228',
		cityId: 30003,
		id: 120007,
		locationCode: 'CELOR',
		name: 'Celorio Tortillas',
		shortName: 'Celorio',
	},
];

it('Displays Nothing If There Are No Locations', () => {
	render(<LocationList />, { wrapper: MemoryRouter });
	const componentHeadings = screen.queryByRole('heading');
	expect(componentHeadings).not.toBeInTheDocument();
});

it('Has a Header If Passed Location(s)', () => {
	render(<LocationList locations={dummyLocations} />, {
		wrapper: MemoryRouter,
	});
	const componentHeader = screen.getByRole('heading', { level: 3 });
	expect(componentHeader).toBeInTheDocument();
	expect(componentHeader).toHaveTextContent(/places to see/i);
});
