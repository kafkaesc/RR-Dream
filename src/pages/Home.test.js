import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Has Page Header', () => {
	render(<Home />, { wrapper: MemoryRouter });
	const pageHeaderElement = screen.getByText(/A React site/);
	expect(pageHeaderElement).toBeInTheDocument();
});

test('Has Train Image', () => {
	render(<Home />, { wrapper: MemoryRouter });
	const theArrivalOfATrainElement = screen.getByAltText(
		/A black and white scene of a train/
	);
	expect(theArrivalOfATrainElement).toBeInTheDocument();
});
