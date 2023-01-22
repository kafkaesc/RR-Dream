function H1(props) {
	const classNames = props.className
		? 'mb-4 text-6xl ' + props.className
		: 'mb-4 text-6xl';
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <h1 {...props} className={classNames}></h1>;
}

export default H1;
