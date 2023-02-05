import { render, screen } from '@testing-library/react';
import Technologies from './Technologies';

it('Has a React Link', () => {
	render(<Technologies />);
	const reactLink = screen.getByRole('link', { name: 'React Logo' });
	expect(reactLink).toBeInTheDocument();
	expect(reactLink).toHaveAttribute('href', 'https://reactjs.org/');
	expect(reactLink).toHaveAttribute('target', '_blank');
});

it('Has a React Logo', () => {
	render(<Technologies />);
	const reactImg = screen.getByRole('img', { name: 'React Logo' });
	expect(reactImg).toBeInTheDocument();
});

it('Has a React Router Link', () => {
	render(<Technologies />);
	const reactRouterLink = screen.getByRole('link', {
		name: 'React Router Logo',
	});
	expect(reactRouterLink).toBeInTheDocument();
	expect(reactRouterLink).toHaveAttribute('href', 'https://reactrouter.com/');
	expect(reactRouterLink).toHaveAttribute('target', '_blank');
});

it('Has a React Router Logo', () => {
	render(<Technologies />);
	const reactRouterImg = screen.getByRole('img', { name: 'React Router Logo' });
	expect(reactRouterImg).toBeInTheDocument();
});

it('Has a Tailwind Link', () => {
	render(<Technologies />);
	const tailwindLink = screen.getByRole('link', { name: 'Tailwind Logo' });
	expect(tailwindLink).toBeInTheDocument();
	expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
	expect(tailwindLink).toHaveAttribute('target', '_blank');
});

it('Has a Tailwind Logo', () => {
	render(<Technologies />);
	const tailwindImg = screen.getByRole('img', { name: 'Tailwind Logo' });
	expect(tailwindImg).toBeInTheDocument();
});

it('Has a React Testing Library Link', () => {
	render(<Technologies />);
	const reactTestingLibraryLink = screen.getByRole('link', {
		name: 'React Testing Library Logo',
	});
	expect(reactTestingLibraryLink).toBeInTheDocument();
	expect(reactTestingLibraryLink).toHaveAttribute(
		'href',
		'https://testing-library.com/'
	);
	expect(reactTestingLibraryLink).toHaveAttribute('target', '_blank');
});

it('Has a React Testing Library Logo', () => {
	render(<Technologies />);
	const reactTestingLibraryLogo = screen.getByRole('img', {
		name: 'React Testing Library Logo',
	});
	expect(reactTestingLibraryLogo).toBeInTheDocument();
});

it('Has a Jest Link', () => {
	render(<Technologies />);
	const jestLink = screen.getByRole('link', { name: 'Jest Logo' });
	expect(jestLink).toBeInTheDocument();
	expect(jestLink).toHaveAttribute('href', 'https://jestjs.io/');
	expect(jestLink).toHaveAttribute('target', '_blank');
});

it('Has a Jest Logo', () => {
	render(<Technologies />);
	const jestLogo = screen.getByRole('img', { name: 'Jest Logo' });
	expect(jestLogo).toBeInTheDocument();
});
