import H2 from 'elements/H2';
import Link from 'elements/Link';
import P from 'elements/P';

import ContentColumn from 'layout/ContentColumn';

function PageError({ uiMessage }) {
	return (
		<ContentColumn className="text-center">
			<H2>There Was a Problem Loading That Page</H2>
			{uiMessage && <P>{uiMessage}</P>}
			<P>
				<Link to="/Home">Click here</Link> to go home.
			</P>
		</ContentColumn>
	);
}

export default PageError;
