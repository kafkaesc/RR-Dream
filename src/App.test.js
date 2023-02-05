import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('Has the Main Title', () => {
	render(<App />, { wrapper: MemoryRouter });
	const h1Title = screen.getByRole('heading', { level: 1 });
	expect(h1Title).toBeInTheDocument();
	expect(h1Title).toHaveTextContent(/texas rail/i);
});
