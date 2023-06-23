<script>
	import CategoryTag from '$lib/components/CategoryTag.svelte';
	export let post;
</script>

<div class="post-meta">
	<h1 class="content-subhead">Post Meta</h1>
	<ul class="list">
		<li>Author: <a href="/authors/{post.author.slug}">{post.author.name}</a></li>
		<li>Published: {`${new Date(post.publishedAt).toDateString()} at ${new Date(post.publishedAt).toLocaleTimeString()}`}</li>
		<li>Last Updated: {`${new Date(post.updatedAt).toDateString()} at ${new Date(post.updatedAt).toLocaleTimeString()}`}</li>
		<li>
			Categories:
			{#each post.categories as category}
				<CategoryTag {category} />
			{/each}
		</li>
	</ul>
</div>

<style>
	.post-meta {
		margin: 2rem 0;
	}

	.list {
		list-style: none;
		padding: 0;
	}
	.list li {
		margin-bottom: 0.5rem;
		color: #aaa;
	}
</style>
