<!-- +layout.svelte -->
<!--  
Use a hero image or video: A hero image or video is a large, eye-catching image or video that is placed at the top of the page. This can help to grab the user's attention and make your page more visually appealing.

Add a parallax effect: A parallax effect is a scrolling effect where the background of the page moves at a different speed than the foreground. This can create a sense of depth and make your page more engaging.

Use a gradient background: Gradients are a popular design trend that can add depth and visual interest to your page. You can use a gradient background for the header or other sections of your page.

Add hover effects: Hover effects are a great way to add interactivity to your page. You can add hover effects to buttons, links, and other elements to make them more engaging.

Use animations: Animations can add a sense of fun and playfulness to your page. You can use animations to highlight important elements, add visual interest, and create a more engaging user experience.

Add a sticky header: A sticky header is a header that stays fixed at the top of the page as the user scrolls. This can help to keep important navigation links and other information easily accessible.

Use bold typography: Bold typography is a great way to make your page stand out. You can use bold fonts for headings and other important text to make them more prominent.

-->

<!-- layout.svelte -->
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
			socialPanel.classList.add('hidden');
			infoTab.classList.add('hidden');
		} else {
			socialPanel.classList.remove('hidden');
			infoTab.classList.remove('hidden');
		}
	}
</script>

<div class="bg-white min-h-screen">
	<header class="fixed top-0 left-0 right-0 z-10">
		<nav class="container mx-auto px-4 py-2 flex justify-between items-center bg-secondary rounded-xl">
			<a href="/" class="text-2xl font-bold hover:text-accent">Aaron Deas Web Development</a>
			<ul id="social-panel" class="flex w-1/4 rounded flex justify-around border-2 border-dotted border-highlight">
				<a href="#">
					<img src={gibhubIcon} alt="Github" class="hover:text-accent" />
				</a>
				<a href="#">
					<img src={linkedIn} alt="LinkedIn" class="hover:text-accent" />
				</a>
				<a href="#">
					<img src={eMail} alt="Email" />
				</a>
			</ul>
			<ul class="flex">
				<li>
					<a href="#technologiesPage" class="hover:text-accent ml-4 text-xl font-bold">About</a>
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
	<footer class="bg-text text-white py-4">
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
</style>
