<!-- +page.svelte -->
<script>
	import { onMount } from 'svelte';
	import CompaniesWorked from '../components/CompaniesWorked.svelte';
	import ProjectGrid from '../components/ProjectGrid.svelte';
	import Webdev from '../lib/assets/webdev.jpg';
	import Technologies from '../components/Technologies.svelte';
	let ready = false;
	onMount(() => (ready = true));

	const handleArea1Click = () => {
		console.log('area1 clicked');
	};
</script>

<main class="flex flex-col items-center">
	<div class="relative">
		{#if ready}
			<img src={Webdev} alt="Web Dev" class="object-cover" usemap="#image-map" />
			<map name="image-map">
				<area
					id="area1"
					href="#"
					alt="Cartoon web developer in action."
					coords="100,75,509,325" 
					shape="rect"
					on:click={handleArea1Click}
					on:mouseover={() => console.log('area1 mouseover')}
					on:focus={() => console.log('area1 focus')}
					tabindex="0"
				/>
			</map>
		{/if}
	</div>
	<div class="component-container h-full w-1/2">
		<Technologies />
	</div>
	<div class="component-container w-full">
		<ProjectGrid />
	</div>
	<div class="component-container h-full w-full">
		<CompaniesWorked />
	</div>
</main>

<style>
	.component-container {
		margin-bottom: 50vh;
	}
</style>
