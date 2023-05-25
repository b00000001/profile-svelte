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
</script>

<div class="bg-secondary min-h-screen">
	<header class="bg-primary shadow-lg fixed top-0 left-0 right-0 z-10">
		<nav class="container mx-auto px-4 py-2 flex justify-between items-center">
			<a href="/" class="text-lg font-bold text-white hover:text-accent">My Site</a>
			<ul class="flex">
				<li>
					<a href="/about" class="text-white hover:text-accent ml-4">About</a>
				</li>
				<li>
					<a href="/contact" class="text-white hover:text-accent ml-4">Contact</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="container mx-auto px-4 py-8">
		<slot />
	</main>
	<footer class="bg-primary text-white py-4">
		<div class="container mx-auto px-4">
			<p class="text-center">&copy; 2021 My Site. All rights reserved.</p>
		</div>
	</footer>
</div>
