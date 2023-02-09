import { useRouteError } from 'react-router-dom';

import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="error-page">
			<div className="text-center content-column">
				<H1>Error</H1>
				<P>Oops! Looks like there was an error loading that page.</P>
				<P>
					<Link to="/Home">Click here</Link> to go home.
				</P>
				<img
					alt="A derailed steam locomotive hangs out the second floor of a train station."
					className="max-w-lg mx-auto"
					src={require('assets/images/crash.jpg')}
				/>
			</div>
		</div>
	);
}
