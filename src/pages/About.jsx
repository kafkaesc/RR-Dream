import A from 'elements/A';
import H2 from 'elements/H2';
import H3 from 'elements/H3';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

import Colorway from 'components/Colorway';
import SocialLinks from 'components/SocialLinks';
import Technologies from 'components/Technologies';

function About() {
	return (
		<ContentColumn>
			<H2 className="text-center">About</H2>
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
			<H3>Colors</H3>
			<Colorway />
			<H3>Credits</H3>
			<ul className="pl-4 mb-4 list-disc">
				<li>
					The image of an arriving train on the home page is from the French
					movie <em>L'arrivée d'un train en gare de La Ciotat</em> by the
					Lumière brothers. The screenshot is sourced from{' '}
					<A
						href="https://en.wikipedia.org/wiki/File:L%27Arriv%C3%A9e_d%27un_train_en_gare_de_La_Ciotat.jpg"
						rel="noreferrer"
						target="_blank"
					>
						Wikipedia
					</A>
					.
				</li>
				<li>
					The image of the 1895 train wreck at Montparnasse Station on the 404
					page is sourced from{' '}
					<A
						href="https://commons.wikimedia.org/wiki/File:Train_wreck_at_Montparnasse_1895.jpg"
						rel="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					.
				</li>
				<li>
					The view of Dallas by Raphael Tuck & Sons is provided courtesy of
					Special Collections, University of Houston Libraries and sourced from{' '}
					<A
						href="https://commons.wikimedia.org/wiki/File:View_showing_Post_Office,_Dallas,_Texas.jpg"
						rel="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					.
				</li>
				<li>
					The view of the Littlefield Fountain and UT Tower in Austin is by Reid
					Sullivan and sourced via{' '}
					<A
						href="https://commons.wikimedia.org/wiki/File:The_University_of_Texas_at_Austin_-_Littlefield_Fountain_and_Main_Building.jpg"
						rel="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					.
				</li>
				<li>
					The view of Market Square in San Antonio by Raphael Tuck & Sons is
					provided courtesy of Special Collections, University of Houston
					Libraries and sourced from{' '}
					<A
						href="https://commons.wikimedia.org/wiki/File:City_Market,_San_Antonio,_Texas.jpg"
						rel="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					.
				</li>
				<li>
					The view of Houston by Acmegraph Co. is provided courtesy of Special
					Collections, University of Houston Libraries and sourced from{' '}
					<A
						href="https://commons.wikimedia.org/wiki/File:Bird%27s-eye_view_Houston_Texas-Milby_Hotel.jpg"
						rel="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					.
				</li>
				<li>
					The view of San Jacinto Plaza in El Paso is provided courtesy of
					Special Collections, University of Houston Libraries and sourced from{' '}
					<A
						href="https://commons.wikimedia.org/wiki/File:The_Plaza,_El_Paso,_Texas.jpg"
						el="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					.
				</li>
			</ul>
			<SocialLinks />
			<P className="text-center">Built by Jared Hettinger</P>
		</ContentColumn>
	);
}

export default About;
