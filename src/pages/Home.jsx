import H2 from 'elements/H2';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

function Home() {
	return (
		<ContentColumn className="text-center">
			<H2>Home</H2>
			<P>A React site about the dream of rail in Texas.</P>
			<img
				alt="A black and white scene of a train arriving into a station from the French film The Arrival of a Train at La Ciotat Station."
				className="mx-auto"
				src={require('assets/images/larrivee-dun-train.jpg')}
			/>
		</ContentColumn>
	);
}

export default Home;
