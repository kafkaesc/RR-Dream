import { Link as RRLink } from 'react-router-dom';

function Link(props) {
	const classNames = props.className
		? 'text-link-blue hover:underline ' + props.className
		: 'text-link-blue hover:underline';
	return <RRLink {...props} className={classNames}></RRLink>;
}

export default Link;
