function AppHeader(props) {
	const classNames = props.className
		? 'flex items-center justify-center h-32 text-white bg-rail-black ' +
		  props.className
		: 'flex items-center justify-center h-32 text-white bg-rail-black';
	return (
		<header {...props} className={classNames}>
			{props.children}
		</header>
	);
}

export default AppHeader;
