function ContentColumn(props) {
	const classNames = props.className
		? 'max-w-4xl px-4 mx-auto ' + props.className
		: 'max-w-4xl px-4 mx-auto';
	return (
		<div {...props} className={classNames}>
			{props.children}
		</div>
	);
}

export default ContentColumn;
