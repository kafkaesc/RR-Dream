import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="content-column text-center">
			<h2>Home</h2>
			<p>A React site about the dream of rail in Texas.</p>
			<p>
				<Link to="/City/DAL">Dallas</Link>
				{' // '}
				<Link to="/City/AUS">Austin</Link>
				{' // '}
				<Link to="/City/SAN">San Antonio</Link>
				{' // '}
				<Link to="/City/HOU">Houston</Link>
				{' // '}
				<Link to="/City/ELP">El Paso</Link>
			</p>
			<p>
				<Link to="/About">About</Link>
			</p>
			<img
				alt="A black and white scene of a train arriving into a station from the French film The Arrival of a Train at La Ciotat Station."
				className="App-logo"
				src={require('assets/images/larrivee-dun-train.jpg')}
			/>
		</div>
	);
}

export default Home;
