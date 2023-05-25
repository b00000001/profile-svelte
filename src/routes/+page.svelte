<!-- +page.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import CompaniesWorked from '../components/CompaniesWorked.svelte';
	import ProjectGrid from '../components/ProjectGrid.svelte';
	import Catpic from '../lib/assets/catpic.png';
	let ready = false;
	onMount(() => (ready = true));
</script>

<main>
	<div class="relative">
		{#if ready}
			<img src={Catpic} alt="Cat at computer" class="w-full h-auto object-cover" />
			<div class="absolute inset-0 bg-primary opacity-50" />
			<div
				class="absolute inset-0 flex flex-col items-center justify-center"
				transition:fade
				style="z-index: 1;"
			>
				<div class="w-full flex flex-col justify-evenly items-center w-8/12 h-1/3">
					<h1 class="text-3xl font-bold font-sans text-white mb-4">Welcome to My Profile</h1>
					<div class="flex flex-col items-center">
						<p class="text-gray-300 leading-loose mb-8">
							I am a Full Stack Web Developer with over 8 years of experience in the IT industry. I
							have a strong understanding of both the front-end and back-end development process, I
							am also proficient JavaScript/Typescript and associated technologies. I am a highly
							motivated and results-oriented individual, who is always looking for new challenges.
						</p>
						<a
							href="#projects"
							class="bg-accent hover:bg-highlight text-white font-bold py-2 px-4 rounded mb-4"
						>
							View My Projects
						</a>
						<p class="text-gray-300 leading-loose pb-4">
							Don't hesitate to contact me if you have any questions or would like to work together.
						</p>
						<a
							href="/contact"
							class="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded"
						>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div id="projects"><ProjectGrid /></div>
	<div><CompaniesWorked /></div>
</main>
