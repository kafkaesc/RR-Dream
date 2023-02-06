function ColorBox({ boxColor }) {
	// Concatenating the bg-* within className will cause
	// Tailwind to not compile the bg class unless they're
	// use elsewhere in the app.
	const bg = 'bg-' + boxColor;
	return (
		<li className="inline-block mx-1 border border-rail-black">
			<div className={`w-16 h-16 sm:w-24 sm:h-24 ${bg}`}></div>
		</li>
	);
}

export default ColorBox;
