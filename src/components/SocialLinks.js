const socialLinks = [
	{
		imageName: 'github.png',
		siteName: 'GitHub',
		url: 'https://www.github.com/kafkaesc',
	},
	{
		imageName: 'twitter.png',
		siteName: 'Twitter',
		url: 'https://www.twitter.com/_kafkaesc',
	},
	{
		imageName: 'instagram.png',
		siteName: 'Instagram',
		url: 'https://www.instagram.com/kafkaesc',
	},
];

function SocialLinks() {
	return (
		<ul className="list-none mb-2 text-center">
			{socialLinks.map((sl) => {
				return (
					<li className="inline-block" key={sl.siteName}>
						<a href={sl.url} rel="noreferrer" target="_blank">
							<img
								alt={sl.siteName}
								className="h-8 mx-3"
								src={require('assets/images/social/' + sl.imageName)}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default SocialLinks;
