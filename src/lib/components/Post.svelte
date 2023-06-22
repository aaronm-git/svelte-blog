<script>
	import CategoryTag from '$lib/components/CategoryTag.svelte';

	export let id = '';
	export let title = '';
	export let author = '';
	export let categories = [];
	export let description = '';
	export let publishedAt = '';
</script>

<section class="post">
	<header class="post-header">
		<h2 class="post-title">{title}</h2>
		<img alt="{author.name}'s avatar" class="post-avatar" src={author.imageUrl} width="48" height="48" />
		<p class="post-meta">
			Published on <time class="post-date" datetime={new Date(publishedAt)}>{new Date(publishedAt).toLocaleDateString()}</time>, by
			<a href={`/authors/${author.slug}`} class="post-author">{author.name}</a>
			under

			{#each categories as category}
				<CategoryTag {category} />
			{/each}
		</p>
	</header>
	<div class="post-description">
		<p>
			{description}
		</p>
		<a href="/posts/{id}">Read more &gt;</a>
	</div>
</section>
