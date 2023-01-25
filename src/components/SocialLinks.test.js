import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

test('Has GitHub Icon', () => {
	render(<SocialLinks />);
	const gitHubIconElement = screen.getByAltText('GitHub');
	expect(gitHubIconElement).toBeInTheDocument();
});

test('Has GitHub Link', () => {
	render(<SocialLinks />);
	const gitHubLinkElement = screen.getByRole('link', { name: 'GitHub' });
	expect(gitHubLinkElement).toHaveAttribute(
		'href',
		'https://www.github.com/kafkaesc'
	);
	expect(gitHubLinkElement).toHaveAttribute('target', '_blank');
});

test('Has Twitter Icon', () => {
	render(<SocialLinks />);
	const twitterIconElement = screen.getByAltText('Twitter');
	expect(twitterIconElement).toBeInTheDocument();
});

test('Hast Twitter Link', () => {
	render(<SocialLinks />);
	const twitterLinkElement = screen.getByRole('link', { name: 'Twitter' });
	expect(twitterLinkElement).toHaveAttribute(
		'href',
		'https://www.twitter.com/_kafkaesc'
	);
	expect(twitterLinkElement).toHaveAttribute('target', '_blank');
});

test('Has Instagram Icon', () => {
	render(<SocialLinks />);
	const instagramIconElement = screen.getByAltText('Instagram');
	expect(instagramIconElement).toBeInTheDocument();
});

test('Has Instagram Link', () => {
	render(<SocialLinks />);
	const instagramLinkElement = screen.getByRole('link', { name: 'Instagram' });
	expect(instagramLinkElement).toHaveAttribute(
		'href',
		'https://www.instagram.com/kafkaesc'
	);
	expect(instagramLinkElement).toHaveAttribute('target', '_blank');
});
