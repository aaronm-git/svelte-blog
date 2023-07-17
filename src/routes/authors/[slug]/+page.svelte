<script>
	import Posts from '$lib/components/Posts.svelte';
	export let data;
	let { posts, name } = data.props;
	const subhead = 'Posts by ' + name;
</script>

<Posts {posts} {subhead} />
