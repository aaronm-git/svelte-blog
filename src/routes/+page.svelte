<script>
	import Footer from '$lib/components/Footer.svelte';
	import Post from '$lib/components/Post.svelte';

	export let data;
	let { posts } = data;
	$: ({ posts } = data);

	const pinnedPosts = posts?.filter((post) => post.isPinned) || [];
	const recentPosts = posts?.filter((post) => !post.isPinned).sort((a, b) => b.created_at - a.created_at) || [];
</script>

<div>
	<!-- A wrapper for all the blog posts -->
	{#if pinnedPosts.length > 0}
		<div class="posts">
			<h1 class="content-subhead">Pinned Post</h1>
			{#each pinnedPosts as post}
				<Post {...post} />
			{/each}
		</div>
	{/if}

	{#if recentPosts.length > 0}
		<div class="posts">
			<h1 class="content-subhead">Recent Posts</h1>
			{#each recentPosts as post}
				<Post {...post} />
			{/each}
		</div>
	{/if}
	<!-- <ImagePost /> -->
	<Footer />
</div>
