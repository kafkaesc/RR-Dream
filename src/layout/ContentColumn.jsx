function ContentColumn(props) {
	const classNames = props.className
		? 'max-w-4xl mx-auto px-4 ' + props.className
		: 'max-w-4xl mx-auto px-4';
	return (
		<div {...props} className={classNames}>
			{props.children}
		</div>
	);
}

export default ContentColumn;
