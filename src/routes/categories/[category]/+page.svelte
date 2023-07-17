<script>
	import Posts from '$lib/components/Posts.svelte';
	export let data;
	$: ({ category, posts } = data.props);
	$: subhead = `Posts in ${category} category`;
</script>

<Posts {posts} {subhead} />
