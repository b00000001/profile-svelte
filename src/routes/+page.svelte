<script>
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import CompaniesWorked from '../components/CompaniesWorked.svelte';
	import ProjectGrid from '../components/ProjectGrid.svelte';
	import Webdev from '../lib/assets/webdev.jpg';
	import Technologies from '../components/Technologies.svelte';
	let ready = false;
	let myImageOverlay;
	let midLeftArea;

	onMount(() => {
		ready = true;
		const infoTab = document.querySelector('#information-tab p');
		setTimeout(() => {
			myImageOverlay = document.querySelector('#my-image-overlay');
			midLeftArea = document.querySelector('#midLeftarea-overlay');

			myImageOverlay?.addEventListener('mouseover', () => {
				infoTab?.classList.add('active');
				infoTab.innerText = 'LinkedIn';
			});
			myImageOverlay?.addEventListener('mouseout', () => {
				infoTab?.classList.remove('active');
				infoTab.innerText = 'Welcome!';
			});
			midLeftArea?.addEventListener('mouseover', () => {
				infoTab?.classList.add('active');
				infoTab.innerText = 'Github';
			});
			midLeftArea?.addEventListener('mouseout', () => {
				infoTab?.classList.remove('active');
				infoTab.innerText = 'Welcome!';
			});
		}, 0);
	});

	const handleArea1Click = (element) => {
		switch (element) {
			case 'linkedIn':
				return () => {
					window.open('https://www.linkedin.com/in/aaron-deas-0b1b3b1b4/', '_blank');
				};
			case 'github':
				return () => {
					window.open('https://github.com/b00000001', '_blank');
				};
			default:
				return () => {};
		}
	};
</script>

<!-- +page.svelte -->

<main class="flex flex-col items-center justify-evenly">
	<div class="py-4 fixed right-0" id="information-tab">
		<div class="text-center w-full">
			<p class="text-2xl font-bold">Welcome!</p>
		</div>
	</div>
	<div class="relative flex justify-center py-20 flex flex-col">
		{#if ready}
			<div
				id="my-image-overlay"
				class="area-overlay cursor-pointer"
				on:click={handleArea1Click('linkedIn')}
			/>
			<div
				id="midLeftarea-overlay"
				class="midLeft-overlay cursor-pointer"
				on:click={handleArea1Click('github')}
			/>
			<figure class='flex flex-col items-center mb-10'>
				<img src={Webdev} id="hero-webdev" alt="Web Dev" class="object-cover" />
				<figcaption class='text-xs'>Click highlighted portions of the photo.</figcaption>
			</figure>
			<div><p class='font-bold text-2xl'>Hello! I am a Full Stack Web Developer leveraging a background in IT to build a more intuitive user experience on the web.</p>
			</div>
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
		top: 16%;
		left: 21.4%;
		width: 8.6%;
		height: 9%;
		border: 6px dashed #4110c939;
		transition: border-color 0.4s ease-in-out;
		border-radius: 4px;
	}
	.midLeft-overlay {
		position: absolute;
		top: 31.3%;
		left: 18%;
		width: 14%;
		height: 16.8%;
		transition: border-color 0.4s ease-in-out;
		border-radius: 4px;
		border: 6px dashed #4110c939;
	}

	.area-overlay:hover {
		border-color: #60ff9a94;
	}
	.midLeft-overlay:hover {
		border-color: #60ff9a94;
	}
	#information-tab {
		z-index: 9999;
		top: 34.6%;
		left: 52%;
		height: 7.7%;
		width: 12.2%;
	}
</style>
