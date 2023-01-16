function SocialLinks() {
	return (
		<ul className="social-links">
			<li>
				<a
					href="https://www.github.com/kafkaesc"
					rel="noreferrer"
					target="_blank"
				>
					<img alt="GitHub" src={require('assets/images/social/github.png')} />
				</a>
			</li>
			<li>
				<a
					href="https://www.twitter.com/_kafkaesc"
					rel="noreferrer"
					target="_blank"
				>
					<img
						alt="Twitter"
						src={require('assets/images/social/twitter.png')}
					/>
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/kafkaesc"
					rel="noreferrer"
					target="_blank"
				>
					<img
						alt="Instagram"
						src={require('assets/images/social/instagram.png')}
					/>
				</a>
			</li>
		</ul>
	);
}

export default SocialLinks;
