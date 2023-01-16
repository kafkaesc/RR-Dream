import H2 from 'elements/H2';
import P from 'elements/P';

import SocialLinks from 'components/SocialLinks';

function About() {
	return (
		<div className="content-column">
			<H2>About</H2>
			<P>About this project.</P>
			<P>
				The full code for this site can be viewed on{' '}
				<a
					href="https://github.com/kafkaesc/RR-Dream"
					rel="noreferrer"
					target="_blank"
				>
					GitHub
				</a>
				.
			</P>
			<P className="text-center">Built by Jared Hettinger</P>
			<SocialLinks />
		</div>
	);
}

export default About;
