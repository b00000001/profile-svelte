<script>
	import '../app.css';

	import { onMount } from 'svelte';
	import gibhubIcon from '../lib/assets/companylogos/github.svg';
	import linkedIn from '../lib/assets/companylogos/linkedin.svg';
	import eMail from '../lib/assets/companylogos/mail.svg';

	let socialPanel;
	let infoTab;

	onMount(() => {
		socialPanel = document.getElementById('social-panel');
		infoTab = document.querySelector('#information-tab p');
		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		if (window.pageYOffset > 0) {
			// socialPanel.classList.add('hidden');
			infoTab.classList.add('hidden');
		} else {
			// socialPanel.classList.remove('hidden');
			infoTab.classList.remove('hidden');
		}
	}
</script>

<div class="bg-white min-h-screen">
	<div class="social-media-bar h-11/12">
		<ul
			id="social-panel"
			class="flex flex-col rounded flex justify-around border-2 bg-secondary rounded-2xl border-text mx-2"
		>
			<a href="#" class="mx-2 my-2">
				<img src={gibhubIcon} alt="Github" class="hover:bg-accent rounded-md" />
			</a>
			<a href="#" class="mx-2 my-2">
				<img src={linkedIn} alt="LinkedIn" class="hover:bg-accent rounded-md" />
			</a>
			<a href="#" class="mx-2 my-2">
				<img src={eMail} alt="Email" class="hover:bg-accent rounded-md" />
			</a>
		</ul>
	</div>
	<header class="fixed top-0 left-0 right-0 z-10">
		<nav
			class="container mx-auto px-4 py-2 flex justify-between items-center bg-secondary rounded-b-lg border-2 border-text" 
		>
			<a href="/" class="text-2xl font-bold hover:text-accent">Aaron Deas</a>
			<ul class="flex">
				<li>
					<a href="#aboutMe" class="hover:text-accent ml-4 text-xl font-bold">About</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="container mx-auto">
		<div class="scrollbar">
			<div class="scrollbar-track" />
			<div class="scrollbar-thumb" />
		</div>
		<slot />
	</main>
	<footer class="bg-secondary text-white py-4 border-2 border-text">
		<div class="container mx-auto px-4">
			<p class="text-center font-bold text-accent">&copy; 2023. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	#social-panel {
		opacity: 1;
		visibility: visible;
		transition: all 0.5s ease-in-out;
	}

	#social-panel.hidden {
		opacity: 0;
		visibility: hidden;
		transform: scale(0.8);
	}
	.social-media-bar {
		position: fixed;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.social-media-icon {
		margin-bottom: 1rem;
	}
</style>
