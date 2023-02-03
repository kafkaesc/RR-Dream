import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageError from './PageError';

it('Has Page Header', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(<PageError />, { wrapper: MemoryRouter });
	const pageHeader = screen.getByRole('heading', { level: 2 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/there was a problem loading the page/i);

	console.error = errorObject;
});

it('Displays the uiMessage Prop', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(
		<PageError uiMessage="These are not the droids you're looking for" />,
		{ wrapper: MemoryRouter }
	);
	const uiMessageNotice = screen.getByText(
		/these are not the droids you're looking for/i
	);
	expect(uiMessageNotice).toBeInTheDocument();

	console.error = errorObject;
});

it('Displays a Link Home', () => {
	const errorObject = console.error;
	console.error = jest.fn();

	render(<PageError />, { wrapper: MemoryRouter });
	const homeLink = screen.getByRole('link', { name: /click here to go home/i });
	expect(homeLink).toBeInTheDocument();

	console.error = errorObject;
});
