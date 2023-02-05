import { Link, useLocation } from 'react-router-dom';

function NavigationItem(props) {
	const { title, to, ...rest } = props;
	const { pathname } = useLocation();

	return (
		<>
			{pathname === to ? (
				<li className="inline-flex items-center h-10 px-2 bg-rail-black text-rail-pink">
					<Link to={to} className="p-1" {...rest}>
						{title}
					</Link>
				</li>
			) : (
				<li className="inline-flex items-center h-10 px-2 text-rail-white hover:bg-rail-black hover:text-rail-pink">
					<Link to={to} className="p-1" {...rest}>
						{title}
					</Link>
				</li>
			)}
		</>
	);
}

export default NavigationItem;
