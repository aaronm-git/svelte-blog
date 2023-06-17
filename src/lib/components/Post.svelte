<script>
	import CategoryTag from '$lib/components/CategoryTag.svelte';

	export let title = '';
	export let author = '';
	export let categories = [];
	export let description = '';
</script>

<section class="post">
	<header class="post-header">
		<h2 class="post-title">{title}</h2>
		<img alt="{author.name}'s avatar" class="post-avatar" src={author.imageUrl} width="48" height="48" />
		<p class="post-meta">
			By <a href={author.url} class="post-author">{author.name}</a> under

			{#each categories as category}
				<CategoryTag name={category} />
			{/each}
		</p>
	</header>
	<div class="post-description">
		<p>
			{description}
		</p>
	</div>
</section>
