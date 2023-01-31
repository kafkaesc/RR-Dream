import { render, screen } from '@testing-library/react';
//import { MemoryRouter } from 'react-router-dom';
import About from './About';

test('Has Page Header', () => {
	render(<About />);
	const pageHeaderElement = screen.getByText('About');
	expect(pageHeaderElement).toBeInTheDocument();
});

test('Has Full Code Acknowledgment', () => {
	render(<About />);
	const fullCodeElement = screen.getByText(
		/full code for this site can be viewed/i
	);
	expect(fullCodeElement).toBeInTheDocument();
});

test('Has GitHub Link', () => {
	render(<About />);
	const gitHubLinkElement = screen.getByText('GitHub');
	expect(gitHubLinkElement).toBeInTheDocument();
	expect(gitHubLinkElement).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/RR-Dream'
	);
});

test('Has Author Attribution', () => {
	render(<About />);
	const attributionElement = screen.getByText('Built by Jared Hettinger');
	expect(attributionElement).toBeInTheDocument();
});
