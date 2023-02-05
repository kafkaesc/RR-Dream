import A from 'elements/A';

import ReactLogo from 'assets/images/tech/react.svg';
import ReactRouterLogo from 'assets/images/tech/react-router.svg';
import TailwindLogo from 'assets/images/tech/tailwindcss.svg';
import JestLogo from 'assets/images/tech/jest.svg';

function Technologies() {
	return (
		<ul className="list-none">
			<li className="inline-block w-1/5 p-3">
				<A href="https://reactjs.org/" rel="noreferrer" target="_blank">
					<img alt="React Logo" className="w-full" src={ReactLogo} />
				</A>
			</li>
			<li className="inline-block w-1/5 p-3">
				<A href="https://reactrouter.com/" rel="noreferrer" target="_blank">
					<img
						alt="React Router Logo"
						className="w-full"
						src={ReactRouterLogo}
					/>
				</A>
			</li>
			<li className="inline-block w-1/5 p-3">
				<A href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
					<img alt="Tailwind Logo" className="w-full" src={TailwindLogo} />
				</A>
			</li>
			<li className="inline-block w-1/5 p-3">
				<A href="https://testing-library.com/" rel="noreferrer" target="_blank">
					<img
						alt="React Testing Library Logo"
						className="w-full"
						src={require('assets/images/tech/react-testing-library.png')}
					/>
				</A>
			</li>
			<li className="inline-block w-1/5 p-3">
				<A href="https://jestjs.io/" rel="noreferrer" target="_blank">
					<img alt="Jest Logo" className="w-full max-h-32" src={JestLogo} />
				</A>
			</li>
		</ul>
	);
}

export default Technologies;
