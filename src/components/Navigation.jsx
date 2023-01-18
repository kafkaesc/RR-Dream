import Link from 'elements/Link';
import P from 'elements/P';

// TODO: Refactor this into a navigation ul.
function Navigation({ showHome }) {
	return (
		<div className="text-center">
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
				{showHome && (
					<>
						<Link to="/Home">Home</Link>
						{' // '}
					</>
				)}
				<Link to="/About">About</Link>
			</P>
		</div>
	);
}

export default Navigation;
