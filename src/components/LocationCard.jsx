// TODO: Build out a locatin card.
function LocationCard({ location }) {
	return (
		<figure class="md:flex bg-gray-c rounded-xl p-8 md:p-0">
			<img
				class="w-24 h-24 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none"
				src={require('assets/images/location/jengc.jpg')}
				alt=""
				width="384"
				height="512"
			/>
			<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
				<blockquote>
					<p class="text-lg font-medium">
						“Tailwind CSS is the only framework that I've seen scale on large
						teams. It’s easy to customize, adapts to any design, and the build
						size is tiny.”
					</p>
				</blockquote>
				<figcaption class="font-medium">
					<div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
					<div class="text-slate-700 dark:text-slate-500">
						Staff Engineer, Algolia
					</div>
				</figcaption>
			</div>
		</figure>
	);
}

export default LocationCard;
