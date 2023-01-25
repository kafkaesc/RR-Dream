import { render, screen } from '@testing-library/react';
import App from './App';

test('App Has Main Title', () => {
	render(<App />);
	const h1TitleElement = screen.getByText('Texas Rail');
	expect(h1TitleElement).toBeInTheDocument();
});
