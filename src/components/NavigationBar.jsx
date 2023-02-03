import NavigationItem from './NavigationItem';

function NavigationBar() {
	return (
		<div className="w-full h-10 text-center bg-rail-darkblue">
			<ul className="list-none">
				<NavigationItem title="Home" to="/Home" />
				<NavigationItem title="Dallas" to="/City/DAL" />
				<NavigationItem title="Austin" to="/City/AUS" />
				<NavigationItem title="San Antonio" to="/City/SAN" />
				<NavigationItem title="Houston" to="/City/HOU" />
				<NavigationItem title="About" to="/About" />
			</ul>
		</div>
	);
}

export default NavigationBar;
