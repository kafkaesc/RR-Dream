import { useParams } from 'react-router-dom';

import H2 from 'elements/H2';
import P from 'elements/P';

import Navigation from 'components/Navigation';

const cities = require('data/cities.json');

function City() {
	const { cityCode } = useParams();
	const city = cities.find((ci) => ci.cityCode === cityCode);

	return (
		<div className="content-column">
			<H2>
				{city.name} ({city.cityCode})
			</H2>
			<P>Welcome to {city.name}</P>
			<img
				alt={`A street scene of ${city.name}.`}
				src={require(`assets/images/${city.name
					.toLowerCase()
					.replace(' ', '-')}.jpg`)}
			/>
			<Navigation showHome={true} />
		</div>
	);
}

export default City;
