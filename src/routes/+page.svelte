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
			<div id="my-image-overlay" class="area-overlay cursor-pointer" />
			<map name="image-map">
				<area
					id="area1"
					href="#"
					alt="Cartoon web developer in action."
					coords="450,230,524,287"
					shape="rect"
					on:click={handleArea1Click}
					on:mouseover={() => console.log('area1 mouseover')}
					on:focus={() => console.log('area1 focus')}
					tabindex="0"
					class="clickable-area"
				/>
			</map>
			<img src={Webdev} id="hero-webdev" alt="Web Dev" class="object-cover" usemap="#image-map" />
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
	.area-overlay {
		position: absolute;
		top: 228px;
		left: 455px;
		width: 75px;
		height: 59px;
		border: 4px solid transparent;
		transition: border-color 0.4s ease-in-out;
		border-radius: 4px;
	}
	.area-overlay:hover {
		border-color: #03030339;
	}
</style>
