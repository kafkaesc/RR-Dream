function H3(props) {
	const classNames = props.className
		? 'mb-4 text-2xl ' + props.className
		: 'mb-4 text-2xl';
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <h3 {...props} className={classNames}></h3>;
}

export default H3;
