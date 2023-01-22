function H3(props) {
	const classNames = props.className ? 'mb-4 ' + props.className : 'mb-4';
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <h3 {...props} className={classNames}></h3>;
}

export default H3;
