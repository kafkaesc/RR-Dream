import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

it('Has a GitHub Icon', () => {
	render(<SocialLinks />);
	const gitHubIcon = screen.getByRole('img', { name: 'GitHub Logo' });
	expect(gitHubIcon).toBeInTheDocument();
});

it('Has a GitHub Link', () => {
	render(<SocialLinks />);
	const gitHubLink = screen.getByRole('link', { name: 'GitHub Logo' });
	expect(gitHubLink).toHaveAttribute('href', 'https://www.github.com/kafkaesc');
	expect(gitHubLink).toHaveAttribute('target', '_blank');
});

it('Has a Twitter Icon', () => {
	render(<SocialLinks />);
	const twitterIcon = screen.getByRole('img', { name: 'Twitter Logo' });
	expect(twitterIcon).toBeInTheDocument();
});

it('Has a Twitter Link', () => {
	render(<SocialLinks />);
	const twitterLink = screen.getByRole('link', { name: 'Twitter Logo' });
	expect(twitterLink).toHaveAttribute(
		'href',
		'https://www.twitter.com/_kafkaesc'
	);
	expect(twitterLink).toHaveAttribute('target', '_blank');
});

it('Has an Instagram Icon', () => {
	render(<SocialLinks />);
	const instagramIcon = screen.getByRole('img', { name: 'Instagram Logo' });
	expect(instagramIcon).toBeInTheDocument();
});

it('Has an Instagram Link', () => {
	render(<SocialLinks />);
	const instagramLink = screen.getByRole('link', { name: 'Instagram Logo' });
	expect(instagramLink).toHaveAttribute(
		'href',
		'https://www.instagram.com/kafkaesc'
	);
	expect(instagramLink).toHaveAttribute('target', '_blank');
});
