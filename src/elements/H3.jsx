function H3(props) {
	const classNames = 'mb-4 ' + props.className;
	// This is a wrapper component--the header
	// content should be passed via props.
	// eslint-disable-next-line
	return <h3 {...props} className={classNames}></h3>;
}

export default H3;
