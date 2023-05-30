<script>
	import ServiceNow from '../lib/assets/companylogos/ServiceNow-01.svg';
	import Microsoft from '../lib/assets/companylogos/Microsoft-03.svg';
	import Starbucks from '../lib/assets/companylogos/Starbucks-01.svg';
	import WellsFargo from '../lib/assets/companylogos/Wells-Fargo-01.svg';

	let openAbout = false;
</script>

<div>
	<div class="flex justify-center items-center flex-col">
		<strong id='aboutMe' class="py-6 text-4xl">Companies I have worked for</strong>
		<div class="grid grid-cols-4 gap-6 h-1/2 w-1/2">
			<p><img src={ServiceNow} alt="ServiceNow Logo" /></p>
			<p><img src={Microsoft} alt="ServiceNow Logo" /></p>
			<p><img src={Starbucks} alt="ServiceNow Logo" /></p>
			<p><img src={WellsFargo} alt="ServiceNow Logo" /></p>
		</div>
		<div class='mt-12'>
			<a
				on:click={() => (openAbout = !openAbout)}
				class="bg-accent text-primary font-bold hover:bg-highlight px-4 py-2 rounded-lg"
				>More about me</a
			>
		</div>
		{#if openAbout}
			<div class="flex items-center">
				<div class="fixed inset-0 flex items-center justify-center z-20 w-1/2">
					<div class="bg-accent p-8 rounded-lg shadow-lg text-text flex flex-col">
						<p>+</p>
						<p>
							I have achieved a certification in Full Stack Development from the University of North
							Carolina, with developed skills in JavaScript, CSS, React.js, and responsive web
							design. Known as an innovative problem solver passionate about developing apps, with a
							focus on mobile-first design and development. With each project, my aim is to best
							engage my audience for an impactful user experience. I applied aspects of UX and agile
							development in a recent project where I worked in a team of four to develop a single
							page MERN app which leverages AJAX requests to dynamically generate dinner recipes
							with suggested wine pairing and movie suggestions based on user input. Excited to
							apply my skillset in the future as part of a fast paced, quality-driven team in order
							to build better experiences on the web.
						</p>
						<button
							class="bg-text hover:bg-highlight px-4 py-2 rounded-lg mt-4 w-1/2 text-accent"
							on:click={() => {
								openAbout = !openAbout;
							}}>Close</button
						>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
