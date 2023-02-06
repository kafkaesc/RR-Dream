function ColorBox({ className }) {
	return (
		<li className="inline-block mx-1 border border-rail-black">
			<div className={`w-16 h-16 sm:w-24 sm:h-24 ${className}`}></div>
		</li>
	);
}

export default ColorBox;
