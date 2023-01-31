import { useParams } from 'react-router-dom';

import H2 from 'elements/H2';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

import LocationCard from 'components/LocationCard';
import Navigation from 'components/Navigation';
import PageError from 'components/PageError';

const cities = require('data/cities.json');
const allLocations = require('data/locations.json');

function City() {
	const { cityCode } = useParams();
	const city = cities.find((ci) => ci.cityCode === cityCode);
	console.log('city: ', city);
	if (!city) {
		return <PageError uiMessage="No city found." />;
	}
	const locations = allLocations.filter((lo) => lo.cityId === city.id);

	return (
		<ContentColumn>
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
			{city.cityCode === 'DAL' && (
				<div className="my-2">
					<LocationCard location={locations[0]} />
				</div>
			)}
			<Navigation showHome={true} />
		</ContentColumn>
	);
}

export default City;
