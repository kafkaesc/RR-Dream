import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

test('Has Dallas Navigation', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const dallasNavigationElement = screen.getByText('Dallas');
	expect(dallasNavigationElement).toBeInTheDocument();
});

test('Has Austin Navigation', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const austinNavigationElement = screen.getByText('Austin');
	expect(austinNavigationElement).toBeInTheDocument();
});

test('Has San Antonio Navigation', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const sanAntonioNavigationElement = screen.getByText('San Antonio');
	expect(sanAntonioNavigationElement).toBeInTheDocument();
});

test('Has Houston Navigation', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const sanAntonioNavigationElement = screen.getByText('Houston');
	expect(sanAntonioNavigationElement).toBeInTheDocument();
});

test('Has El Paso Navigation', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const elPasNavigationElement = screen.getByText('El Paso');
	expect(elPasNavigationElement).toBeInTheDocument();
});

test('Displays Home When showHome = true', () => {
	render(<Navigation showHome={true} />, { wrapper: MemoryRouter });
	const homeNavigationElement = screen.queryByText('Home');
	expect(homeNavigationElement).toBeInTheDocument();
});

test('Hides Home When showHome = false', () => {
	render(<Navigation showHome={false} />, { wrapper: MemoryRouter });
	const homeNavigationElement = screen.queryByText('Home');
	expect(homeNavigationElement).not.toBeInTheDocument();
});

test('Hides Home By Default', () => {
	render(<Navigation />, { wrapper: MemoryRouter });
	const homeNavigationElement = screen.queryByText('Home');
	expect(homeNavigationElement).not.toBeInTheDocument();
});
