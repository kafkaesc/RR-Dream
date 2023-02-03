import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

it('Has a Dallas Link', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const dallasLink = screen.getByRole('link', { name: 'Dallas' });
	expect(dallasLink).toBeInTheDocument();
});

it('Has an Austin Link', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const austinLink = screen.getByRole('link', { name: 'Austin' });
	expect(austinLink).toBeInTheDocument();
});

it('Has a San Antonio Link', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const sanAntonioLink = screen.getByRole('link', { name: 'San Antonio' });
	expect(sanAntonioLink).toBeInTheDocument();
});

it('Has a Houston Link', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const houstonLink = screen.getByRole('link', { name: 'Houston' });
	expect(houstonLink).toBeInTheDocument();
});

it('Has an El Paso Link', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const elPasoLink = screen.getByRole('link', { name: 'El Paso' });
	expect(elPasoLink).toBeInTheDocument();
});

it('Displays Home When showHome = true', () => {
	render(<Navigation showHome={true} />, { wrapper: MemoryRouter });
	const homeLink = screen.getByRole('link', { name: 'Home' });
	expect(homeLink).toBeInTheDocument();
});

it('Hides Home When showHome = false', () => {
	render(<Navigation showHome={false} />, { wrapper: MemoryRouter });
	const homeLink = screen.queryByRole('link', { name: 'Home' });
	expect(homeLink).not.toBeInTheDocument();
});

it('Hides Home by Default', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const homeLink = screen.queryByRole('link', { name: 'Home' });
	expect(homeLink).not.toBeInTheDocument();
});
