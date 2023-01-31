import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Has Page Header', () => {
	render(<Home />, { wrapper: MemoryRouter });
	const pageHeaderElement = screen.getByText(/a react site/i);
	expect(pageHeaderElement).toBeInTheDocument();
});

test('Has Train Image', () => {
	render(<Home />, { wrapper: MemoryRouter });
	const theArrivalOfATrainElement = screen.getByAltText(
		/a black and white scene of a train/i
	);
	expect(theArrivalOfATrainElement).toBeInTheDocument();
});
