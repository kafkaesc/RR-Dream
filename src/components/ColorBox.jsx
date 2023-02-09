export default function ColorBox({ className }) {
	if (!className) {
		return null;
	}
	return (
		<li
			className={`inline-block mx-1 border border-rail-black w-16 h-16 sm:w-24 sm:h-24 ${className}`}
		></li>
	);
}
