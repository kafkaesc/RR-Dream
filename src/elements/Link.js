import { Link as RRLink } from 'react-router-dom';

function Link(props) {
	const classNames = 'text-link-blue hover:underline ' + props.className;
	return <RRLink {...props} className={classNames}></RRLink>;
}

export default Link;
