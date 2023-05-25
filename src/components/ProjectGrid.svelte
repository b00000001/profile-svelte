<!-- ProjectGrid.svelte -->
<script>
	import cosmosexpresssnippet from '../lib/assets/cosmosexpresssnip.jpg';
	import calendarbot from '../lib/assets/calendarbot.jpg';

	let projects = [
		{
			title: 'CosmosExpress',
			image: cosmosexpresssnippet,
			projectShortName: 'Cosmos Express',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Google Calendar Bot',
			image: calendarbot,
			projectShortName: 'Google Calendar Bot',
			description:
				'A bot that automatically adds Twitter spaces events to a shared google calendar as a project for a client in the crypto space. Entries are gathered by querying the twitter api for the entire list of an individuals following list. Then it queries the Twitter API again for twitter spaces that apply to any of the ids found in the following list. Finally, it adds those events to google calendar based on the data returned from Twitter.'
		},
		{
			title: 'Project 3',
			image: 'project3.jpg',
			projectShortName: 'P',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Project 4',
			image: 'project4.jpg',
			projectShortName: 'P',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Project 5',
			image: 'project5.jpg',
			projectShortName: 'P',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Project 6',
			image: 'project6.jpg',
			projectShortName: 'P',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];

	let selectedProject = null;

	function selectProject(project) {
		selectedProject = project;
	}
</script>

<div class="grid grid-cols-3 gap-6 mb-6">
	{#each projects as project}
		<a
			href="#"
			class="bg-primary hover:bg-highlight p-4 rounded-lg relative flex justify-center items-center"
			on:click={(e) => {
				e.preventDefault();
				selectProject(project);
			}}
		>
			<!-- <img src={project.image} alt={project.title} class="w-full h-auto" /> -->
			<p class="text-white text-3xl rounded-full flex justify-center items-center">
				<strong class="mx-2">{project.projectShortName}</strong>
			</p>
		</a>
	{/each}
</div>

{#if selectedProject}
	<div class="flex items-center">
		<div class="fixed inset-0 flex items-center justify-center z-20 w-1/2">
			<div class="bg-white p-8 rounded-lg shadow-lg">
				<h2 class="text-2xl font-bold mb-4">{selectedProject.title}</h2>
				<img src={selectedProject.image} alt={selectedProject.title} class="w-1/2 h-1/2 mb-4" />
				<p class="text-gray-700">{selectedProject.description}</p>
				<button
					class="bg-gray-200 hover:bg-highlight px-4 py-2 rounded-lg mt-4"
					on:click={() => {
						selectedProject = null;
					}}>Close</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	div {
		margin-top: 100px;
	}
	.bg-gray-200:hover .hidden:not(.flex-col) {
		display: flex;
	}
	.bg-gray-200:hover {
		transform: scale(1.1);
	}
	.bg-gray-200:hover .hidden {
		transform: translateY(-100%);
	}
	.selected {
		position: relative;
		z-index: 1;
		grid-column: span 3;
		grid-row: span 2;
	}
	button:hover {
		background-color: #1d1220;
	}
</style>
