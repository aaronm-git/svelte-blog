<script>
	import { page } from '$app/stores';
    import NoResults from '$lib/components/NoResults.svelte';
	import Post from '$lib/components/Post.svelte';
	const year = $page.params.year;

	export let data;
	const { posts } = data.props || [];
</script>

{#if posts.length > 0}
	{#each posts as post}
		<Post {...post} />
	{/each}
{:else}
	<NoResults />
{/if}