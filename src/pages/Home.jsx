import H2 from 'elements/H2';
import P from 'elements/P';

import LocationCard from 'components/LocationCard';
import Navigation from 'components/Navigation';

function Home() {
	return (
		<div className="content-column text-center">
			<H2>Home</H2>
			<P>A React site about the dream of rail in Texas.</P>
			<Navigation />
			<img
				alt="A black and white scene of a train arriving into a station from the French film The Arrival of a Train at La Ciotat Station."
				className="mx-auto"
				src={require('assets/images/larrivee-dun-train.jpg')}
			/>
			<LocationCard />
		</div>
	);
}

export default Home;
