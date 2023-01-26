import A from 'elements/A';
import H2 from 'elements/H2';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

import SocialLinks from 'components/SocialLinks';

function About() {
	return (
		<ContentColumn>
			<H2>About</H2>
			<P>About this project.</P>
			<P>
				The full code for this site can be viewed on{' '}
				<A
					href="https://github.com/kafkaesc/RR-Dream"
					rel="noreferrer"
					target="_blank"
				>
					GitHub
				</A>
				.
			</P>
			<SocialLinks />
			<P className="text-center">Built by Jared Hettinger</P>
		</ContentColumn>
	);
}

export default About;
