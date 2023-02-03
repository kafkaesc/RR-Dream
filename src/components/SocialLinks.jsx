const socialLinks = [
	{ siteName: 'GitHub', url: 'https://www.github.com/kafkaesc' },
	{ siteName: 'Twitter', url: 'https://www.twitter.com/_kafkaesc' },
	{ siteName: 'Instagram', url: 'https://www.instagram.com/kafkaesc' },
];

function SocialLinks() {
	return (
		<ul className="mb-2 text-center list-none">
			{socialLinks.map((sl) => {
				return (
					<li
						className="inline-block"
						key={`social-${sl.siteName.toLowerCase()}`}
					>
						<a href={sl.url} rel="noreferrer" target="_blank">
							<img
								alt={`${sl.siteName} Logo`}
								className="h-8 mx-3"
								src={require(`assets/images/social/${sl.siteName.toLowerCase()}.png`)}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default SocialLinks;
