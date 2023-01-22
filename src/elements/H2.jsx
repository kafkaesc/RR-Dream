function H2(props) {
	const classNames = 'mb-4 text-2xl ' + props.className;
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <h2 {...props} className={classNames}></h2>;
}

export default H2;
