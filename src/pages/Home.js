//import { Link } from 'react-router-dom';
import H2 from 'elements/H2';
import Link from 'elements/Link';
import P from 'elements/P';

function Home() {
	return (
		<div className="content-column text-center">
			<H2>Home</H2>
			<P>A React site about the dream of rail in Texas.</P>
			<P>
				<Link to="/City/DAL">Dallas</Link>
				{' // '}
				<Link to="/City/AUS">Austin</Link>
				{' // '}
				<Link to="/City/SAN">San Antonio</Link>
				{' // '}
				<Link to="/City/HOU">Houston</Link>
				{' // '}
				<Link to="/City/ELP">El Paso</Link>
			</P>
			<P>
				<Link to="/About">About</Link>
			</P>
			<div className="align-center">
				<img
					alt="A black and white scene of a train arriving into a station from the French film The Arrival of a Train at La Ciotat Station."
					src={require('assets/images/larrivee-dun-train.jpg')}
				/>
			</div>
		</div>
	);
}

export default Home;
