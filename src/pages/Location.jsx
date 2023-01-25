import { useParams } from 'react-router-dom';

import H2 from 'elements/H2';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';
import Navigation from 'components/Navigation';

const locations = require('data/locations.json');

function Location() {
	const { locationCode } = useParams();
	const location = locations.filter(
		(lo) => lo.locationCode === locationCode
	)[0];

	return (
		<ContentColumn>
			<H2>{location.name}</H2>
			<P>{location.address}</P>
			<Navigation showHome={true} />
		</ContentColumn>
	);
}

export default Location;
