<script>
	import Footer from '$lib/components/Footer.svelte';
	import Posts from '$lib/components/Posts.svelte';

	export let data;
	let { posts } = data;
	$: ({ posts } = data);

	const pinnedPosts = posts?.filter((post) => post.isPinned) || [];
	const recentPosts = posts?.filter((post) => !post.isPinned).sort((a, b) => b.created_at - a.created_at) || [];
</script>

<div>
	<!-- A wrapper for all the blog posts -->
	<Posts posts={pinnedPosts} subhead="Pinned Posts" />
	<Posts posts={recentPosts} subhead="Recent Posts" />
	<!-- <ImagePost /> -->
	<Footer />
</div>
