import H3 from 'elements/H3';
import Link from 'elements/Link';

function LocationList({ locations }) {
	if (!locations) {
		return null;
	}
	return (
		<>
			<H3>Places to See</H3>
			<ul>
				{locations.map((lo, i, arr) => {
					return (
						<li className="inline" key={lo.id}>
							<Link to={`/Location/${lo.locationCode}`}>{lo.shortName}</Link>
							{i < arr.length - 1 && <span className="mx-1.5">|</span>}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default LocationList;
