<!-- +page.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import CompaniesWorked from '../components/CompaniesWorked.svelte'
	import ProjectGrid from '../components/ProjectGrid.svelte';
    import Catpic from '../lib/assets/catpic.png'
	let ready = false;
	onMount(() => (ready = true));
</script>

<main>
	<div class="relative">
		{#if ready}
			<img
				src="{Catpic}"
				alt="Cat at computer"
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-primary opacity-50" />
			<div
				class="absolute inset-0 flex flex-col items-center justify-center"
				transition:fade
				style="z-index: 1;"
			>
				<h1 class="text-3xl font-bold font-sans text-white mb-4">Welcome to My Profile</h1>
				<p class="text-gray-300 leading-loose mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum
					bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum,
					velit sapien bibendum sapien, vel bibendum sapien.
				</p>
				<a
					href="#projects"
					class="bg-accent hover:bg-highlight text-white font-bold py-2 px-4 rounded mb-4"
				>
					View My Projects
				</a>
				<p class="text-gray-300 leading-loose">
					Don't hesitate to contact me if you have any questions or would like to work together.
				</p>
				<a
					href="/contact"
					class="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded"
				>
					Contact Me
				</a>
			</div>
		{/if}
	</div>
	<div id='projects'><ProjectGrid /></div>
	<div><CompaniesWorked /></div>
</main>
