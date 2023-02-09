import { useParams } from 'react-router-dom';

import H2 from 'elements/H2';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

//import LocationCard from 'components/LocationCard';
import LocationList from 'components/LocationList';
import PageError from 'components/PageError';

const cities = require('data/cities.json');
const allLocations = require('data/locations.json');

export default function City() {
	const { cityCode } = useParams();
	const city = cities.find((ci) => ci.cityCode === cityCode);
	if (!city) {
		return (
			<PageError
				errorMessage={`Invalid cityCode passed into the City component in /pages/City.jsx: ${cityCode}`}
				uiMessage="Unable to find that city."
			/>
		);
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
				className="mb-4"
				src={require(`assets/images/${city.name
					.toLowerCase()
					.replace(' ', '-')}.jpg`)}
			/>
			<LocationList locations={locations} />
			{/*city.cityCode === 'DAL' && (
				<div className="my-2">
					<LocationCard location={locations[0]} />
				</div>
			)*/}
		</ContentColumn>
	);
}
