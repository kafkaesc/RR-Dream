// TODO: Build out a locatin card.
function LocationCard({ location }) {
	return (
		<figure class="bg-gray-e overflow-hidden p-8 rounded-xl md:flex md:p-0">
			<img
				class="w-24 h-24 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none"
				src={require(`assets/images/location/${location.locationCode
					.toLowerCase()
					.replace(' ', '-')}.jpg`)}
				alt="Tangbao, or Chinese soup dumplings, sin in a bamboo steamer on top of a restaurant table."
				width="384"
				height="512"
			/>
			<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
				<blockquote>
					<p class="text-lg font-medium">
						Jeng Chi Restaurant is a fantastic restaurant with a phenomenal
						menu. The green onion pancake is flaky, golden, and perfectly fried.
						Their soup dumplings are hard to beat and you won't want to miss
						their sliced fish in garlic sauce either.
					</p>
				</blockquote>
			</div>
		</figure>
	);
}

export default LocationCard;
