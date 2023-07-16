<script>
	import Posts from '$lib/components/Posts.svelte';
	export let data;
    let { posts } = data.props;
	const authorName = "Posts by " + posts[0]?.author.name;
</script>

<Posts {posts} subhead={authorName} />
