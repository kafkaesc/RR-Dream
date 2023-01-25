import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

test('Has GitHub Link', () => {
	render(<SocialLinks />);
	const githubLinkElement = screen.getByAltText('GitHub');
	expect(githubLinkElement).toBeInTheDocument();
});

test('Has Twitter Link', () => {
	render(<SocialLinks />);
	const githubLinkElement = screen.getByAltText('Twitter');
	expect(githubLinkElement).toBeInTheDocument();
});

test('Has Instagram Link', () => {
	render(<SocialLinks />);
	const githubLinkElement = screen.getByAltText('Instagram');
	expect(githubLinkElement).toBeInTheDocument();
});
