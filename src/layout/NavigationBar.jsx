import NavigationItem from './NavigationItem';

export default function NavigationBar() {
	return (
		<nav className="w-full text-center bg-rail-darkblue">
			<ul className="list-none">
				<NavigationItem title="Home" to="/Home" />
				<NavigationItem title="Dallas" to="/City/DAL" />
				<NavigationItem title="Austin" to="/City/AUS" />
				<NavigationItem title="San Antonio" to="/City/SAN" />
				<NavigationItem title="Houston" to="/City/HOU" />
				<NavigationItem title="El Paso" to="/City/ELP" />
				<NavigationItem title="About" to="/About" />
			</ul>
		</nav>
	);
}
