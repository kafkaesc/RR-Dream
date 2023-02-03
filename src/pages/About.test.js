import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

it('Has a Page Header', () => {
	render(<About />, { wrapper: MemoryRouter });
	const pageHeaderElement = screen.getByRole('heading', { level: 2 });
	expect(pageHeaderElement).toBeInTheDocument();
	expect(pageHeaderElement).toHaveTextContent(/about/i);
});

it('Has the Full Code Acknowledgment', () => {
	render(<About />, { wrapper: MemoryRouter });
	const fullCodeElement = screen.getByText(
		/full code for this project can be viewed/i
	);
	expect(fullCodeElement).toBeInTheDocument();
});

it('Has a GitHub Link to the Project Repository', () => {
	render(<About />, { wrapper: MemoryRouter });
	const gitHubLinkElement = screen.getByRole('link', { name: 'GitHub' });
	expect(gitHubLinkElement).toBeInTheDocument();
	expect(gitHubLinkElement).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/RR-Dream'
	);
});

it('Has the Author Attribution', () => {
	render(<About />, { wrapper: MemoryRouter });
	const attributionElement = screen.getByText('Built by Jared Hettinger');
	expect(attributionElement).toBeInTheDocument();
});
