// TODO: Build out a location card.
function LocationCard({ location }) {
	return (
		<figure class="bg-gray-e flex overflow-hidden p-0 rounded-xl">
			<img
				alt="Tangbao, or Chinese soup dumplings, sin in a bamboo steamer on top of a restaurant table."
				class="h-auto mx-auto w-32 md:w-48"
				height="512"
				src={require(`assets/images/location/${location.locationCode
					.toLowerCase()
					.replace(' ', '-')}.jpg`)}
				width="384"
			/>
			<div class="p-4 pt-6 space-y-4 text-left md:p-8">
				<blockquote>
					<p class="text-md md:text-lg">
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
