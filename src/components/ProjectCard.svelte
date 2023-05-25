<!-- ProjectCard.svelte -->
<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Test</h2>
            <img src="test.png" alt="Test Title" class="w-full h-auto mb-4" />
            <p class="text-gray-700">Test Description</p>
            <button class="bg-gray-200 hover:bg-highlight px-4 py-2 rounded-lg mt-4" on:click="{() => { close(); }}">Close</button>
        </div>
    </div>
</template>

<script>
    export let project;
    export let close;
</script>
<div>Test</div>