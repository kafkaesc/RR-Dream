function FloatUp(props) {
	return (
		<div className="transition duration-300 ease-in-out hover:-translate-y-1">
			{props.children}
		</div>
	);
}

export default FloatUp;
