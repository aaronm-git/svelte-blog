<script>
	import Post from '$lib/components/Post.svelte';
	import NoResults from '$lib/components/NoResults.svelte';
	export let posts = [];
	export let subhead = '';
</script>

<div class="posts">
	{#if subhead}
		<h1 class="content-subhead">{subhead}</h1>
	{/if}
	{#if posts.length > 0}
		{#each posts as post}
			<Post {...post} />
		{/each}
	{:else}
		<NoResults />
	{/if}
</div>
