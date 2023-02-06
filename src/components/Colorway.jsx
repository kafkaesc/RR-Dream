import ColorBox from 'components/ColorBox';

function Colorway() {
	return (
		<ul className="mb-2 text-center">
			<ColorBox className="bg-rail-darkblue" />
			<ColorBox className="bg-rail-gray" />
			<ColorBox className="bg-rail-white" />
			<ColorBox className="bg-rail-pink" />
			<ColorBox className="bg-rail-red" />
		</ul>
	);
}

export default Colorway;
