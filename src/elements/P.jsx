function P(props) {
	const classNames = 'mb-4 ' + props.className;
	return <p {...props} className={classNames}></p>;
}

export default P;
