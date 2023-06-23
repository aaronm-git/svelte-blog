<script>
	import { page } from '$app/stores';
	import Posts from '$lib/components/Posts.svelte';
	const year = $page.params.year;

	export let data;
	const { posts } = data.props;
</script>

<Posts {posts} subhead="Posts from {year}" />
