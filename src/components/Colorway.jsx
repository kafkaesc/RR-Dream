import ColorBox from 'components/ColorBox';

function Colorway() {
	return (
		<ul className="mb-2 text-center">
			<ColorBox boxColor="rail-darkblue" />
			<ColorBox boxColor="rail-gray" />
			<ColorBox boxColor="rail-white" />
			<ColorBox boxColor="rail-pink" />
			<ColorBox boxColor="rail-red" />
		</ul>
	);
}

export default Colorway;
