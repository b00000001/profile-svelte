<script>
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import CompaniesWorked from '../components/CompaniesWorked.svelte';
	import ProjectGrid from '../components/ProjectGrid.svelte';
	import Webdev from '../lib/assets/webdev.jpg';
	import Technologies from '../components/Technologies.svelte';
	let ready = false;
	let myImageOverlay;
	let lowerLeftArea;

	onMount(() => {
		ready = true;
		const infoTab = document.querySelector('#information-tab p');
		setTimeout(() => {
			myImageOverlay = document.querySelector('#my-image-overlay');
			lowerLeftArea = document.querySelector('#lowerLeftarea-overlay');
			console.log(myImageOverlay);

			myImageOverlay?.addEventListener('mouseover', () => {
				console.log('mouseover');
				infoTab?.classList.add('active');
				infoTab.innerText = 'Web Development';
			});
			myImageOverlay?.addEventListener('mouseout', () => {
				console.log('mouseout');
				infoTab?.classList.remove('active');
				infoTab.innerText = 'Welcome!';
			});
			lowerLeftArea?.addEventListener('mouseover', () => {
				console.log('mouseover');
				infoTab?.classList.add('active');
				infoTab.innerText = 'Web Development';
			});
			lowerLeftArea?.addEventListener('mouseout', () => {
				console.log('mouseout');
				infoTab?.classList.remove('active');
				infoTab.innerText = 'Welcome!';
			});
		}, 0);
	});

	const handleArea1Click = () => {
		console.log('area1 clicked');
	};
</script>

<!-- +page.svelte -->

<main class="flex flex-col items-center">
	<div class="py-4 fixed right-0" id="information-tab">
		<div class="text-center w-full">
			<p class="text-2xl font-bold">Welcome!</p>
		</div>
	</div>
	<div class="relative flex justify-center py-20">
		{#if ready}
			<div id="my-image-overlay" class="area-overlay cursor-pointer" />
			<div id="lowerLeftarea-overlay" class="lowerLeft-overlay cursor-pointer" />
			<img src={Webdev} id="hero-webdev" alt="Web Dev" class="object-cover" />
		{/if}
	</div>
	<div class="component-container h-full w-full">
		<Technologies />
	</div>
	<div class="component-container h-full w-full">
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
		top: 18%;
		left: 10.6%;
		width: 11.6%;
		height: 9%;
		border: 6px dashed #4110c939;
		transition: border-color 0.4s ease-in-out;
		border-radius: 4px;
	}
	.lowerLeft-overlay {
		position: absolute;
		top: 60.8%;
		left: 8%;
		width: 15%;
		height: 4.4%;		
		transition: border-color 0.4s ease-in-out;
		border-radius: 4px;
		border: 6px dashed #4110c939;
	}

	.area-overlay:hover {
		border-color: #60ff9a94;
	}
	.lowerLeft-overlay:hover {
		border-color: #60ff9a94;
	}
	#information-tab {
		z-index: 9999;
		top: 34.6%;
		left: 52%;
		height: 7.5%;
		width: 12.2%;
	}
</style>
