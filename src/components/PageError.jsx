import H2 from 'elements/H2';
import Link from 'elements/Link';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

export default function PageError({ errorMessage, uiMessage }) {
	console.error(
		errorMessage
			? errorMessage
			: 'Error with no errorMessage passed to PageError.'
	);
	return (
		<ContentColumn className="text-center">
			<H2>There Was a Problem Loading the Page</H2>
			{uiMessage && <P>{uiMessage}</P>}
			<P>
				<Link to="/Home">Click here to go home</Link>
			</P>
		</ContentColumn>
	);
}
