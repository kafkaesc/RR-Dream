import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SocialLinks from './SocialLinks';

test('Has GitHub Link', () => {
	render(<SocialLinks />, { wrapper: MemoryRouter });
	const githubLinkElement = screen.getByAltText('GitHub');
	expect(githubLinkElement).toBeInTheDocument();
});

test('Has Twitter Link', () => {
	render(<SocialLinks />, { wrapper: MemoryRouter });
	const githubLinkElement = screen.getByAltText('Twitter');
	expect(githubLinkElement).toBeInTheDocument();
});

test('Has Instagram Link', () => {
	render(<SocialLinks />, { wrapper: MemoryRouter });
	const githubLinkElement = screen.getByAltText('Instagram');
	expect(githubLinkElement).toBeInTheDocument();
});
