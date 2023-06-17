<script>
	import CategoryTag from '$lib/components/CategoryTag.svelte';

	/*
	
			id: '1',
		isPinned: false,
		title: 'Introduction to Web Development',
		author: {
			name: 'John Doe',
			imageUrl: 'https://i.pravatar.cc/50',
			url: '/author/john-doe'
		},
		categories: [
			{
				name: 'Technology',
				url: '/category/technology'
			},
			{
				name: 'Programming',
				url: '/category/programming'
			}
		],
		description: 'Learn the basics of web development and get started with building your own websites.',
		created_at: '2023-05-01T00:00:00.000000Z'

	*/

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
				<CategoryTag {category} />
			{/each}
		</p>
	</header>
	<div class="post-description">
		<p>
			{description}
		</p>
	</div>
</section>
