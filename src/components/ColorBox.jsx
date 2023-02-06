function ColorBox({ boxColor }) {
	return (
		<li className="inline-block mx-1 border border-rail-black">
			<div className={`w-16 h-16 sm:w-24 sm:h-24 bg-${boxColor}`}></div>
		</li>
	);
}

export default ColorBox;
