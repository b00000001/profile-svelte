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
		top: 22%;
		left: 29.5%;
		width: 7%;
		height: 8%;
		border: 4px solid transparent;
		transition: border-color 0.4s ease-in-out;
		border-radius: 4px;
	}
	@media (max-width: 1280px) {
		.area-overlay {
			top: 22%;
			left: 29.5%;
			width: 7%;
			height: 8%;
		}
	}
	@media (max-width: 1024px) {
		.area-overlay {
			top: 22%;
			left: 29.5%;
			width: 7%;
			height: 8%;
		}
	}
	@media (max-width: 768px) {
		.area-overlay {
			top: 22%;
			left: 29.5%;
			width: 7%;
			height: 8%;
		}
	}
	@media (max-width: 640px) {
		.area-overlay {
			top: 22%;
			left: 29.5%;
			width: 7%;
			height: 8%;
		}
	}
	@media (max-width: 480px) {
		.area-overlay {
			top: 22%;
			left: 29.5%;
			width: 7%;
			height: 8%;
		}
	}
	@media (max-width: 360px) {
		.area-overlay {
			top: 22%;
			left: 29.5%;
			width: 7%;
			height: 8%;
		}
	}
	.area-overlay:hover {
		border-color: #03030339;
	}
</style>
