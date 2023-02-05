import A from 'elements/A';
import H2 from 'elements/H2';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

import SocialLinks from 'components/SocialLinks';
import Technologies from 'components/Technologies';

function About() {
	return (
		<ContentColumn>
			<H2>About</H2>
			<Technologies />
			<P>
				This project is about two types of routes. The kind you can use with{' '}
				<A href="https://reactrouter.com/" rel="noreferrer" target="_blank">
					React Router
				</A>
				, and the type that I dream of one day connecting the{' '}
				<A
					href="https://en.wikipedia.org/wiki/Texas_Triangle"
					rel="noreferrer"
					target="_blank"
				>
					major cities
				</A>{' '}
				of Texas by{' '}
				<A
					href="https://en.wikipedia.org/wiki/High-speed_rail"
					rel="noreferrer"
					target="_blank"
				>
					rail
				</A>
				.
			</P>
			<P></P>
			<P>
				This site is a{' '}
				<A href="https://reactjs.org" rel="noreferrer" target="_blank">
					React
				</A>{' '}
				single-page app. It uses{' '}
				<A href="https://reactrouter.com" rel="noreferrer" target="_blank">
					React Router
				</A>{' '}
				for routing. It utilizes{' '}
				<A href="https://tailwindcss.com" rel="noreferrer" target="_blank">
					Tailwind
				</A>{' '}
				for site styles. The app is tested using the{' '}
				<A
					href="https://testing-library.com/docs/react-testing-library/intro/"
					rel="noreferrer"
					target="_blank"
				>
					React Testing Library
				</A>{' '}
				and{' '}
				<A href="https://jestjs.io" rel="noreferrer" target="_blank">
					Jest
				</A>
				.
			</P>
			<P>
				The full code for this project can be viewed on{' '}
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
