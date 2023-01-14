import { Link, useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="error-page">
			<div className="content-column text-center">
				<h1>Error</h1>
				<p>Oops! Looks like there was an error loading that page.</p>
				<p>
					<Link to="/Home">Click here</Link> to go home.
				</p>
			</div>
		</div>
	);
}

export default Error;
