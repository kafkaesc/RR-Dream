import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('Has Page Header', () => {
	render(<Home />, { wrapper: MemoryRouter });
	const pageHeader = screen.getByRole('heading', { level: 2 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/home/i);
});

it('Has Train Image', () => {
	render(<Home />, { wrapper: MemoryRouter });
	const theArrivalOfATrainImage = screen.getByRole('img', {
		name: /a black and white scene of a train/i,
	});
	expect(theArrivalOfATrainImage).toBeInTheDocument();
});
