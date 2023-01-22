function AppHeader(props) {
	const classNames = props.className
		? 'bg-rail-black flex h-32 items-center justify-center text-white ' +
		  props.className
		: 'bg-rail-black flex h-32 items-center justify-center text-white';
	return (
		<header {...props} className={classNames}>
			{props.children}
		</header>
	);
}

export default AppHeader;
