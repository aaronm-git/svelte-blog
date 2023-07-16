<script>
	import CategoryTag from '$lib/components/CategoryTag.svelte';
	import dayjs from 'dayjs';
	import { truncateText } from '$lib/utils/string.js';
	import showdown from 'showdown';
	export let id = '';
	export let slug = '';
	export let title = '';
	export let author = '';
	export let categories = [];
	export let text = '';
	export let publishedAt = '';
	export let previewText = '';

	const sanitizeText = (text) => {
		const converter = new showdown.Converter();
		const html = converter.makeHtml(text);
		const sanitizedHtml = DOMPurify.sanitize(html);
		return sanitizedHtml;
	};

	const year = dayjs(publishedAt).format('YYYY');
	const month = dayjs(publishedAt).format('MM');
</script>

<section class="post">
	<header class="post-header">
		<h2 class="post-title">{title}</h2>
		<img alt="{author.name}'s avatar" class="post-avatar" src={author.imageUrl} width="48" height="48" />
		<p class="post-meta">
			Published on <time class="post-date" datetime={new Date(publishedAt)}>{new Date(publishedAt).toLocaleDateString()}</time>, by
			<a href={`/authors/${author.id}`} class="post-author">{author.name}</a>
			under

			{#each categories as category}
				<CategoryTag {category} />
			{/each}
		</p>
	</header>
	<div class="post-description">
		<p>
			{truncateText(previewText)}
		</p>
		<a href="/posts/{year}/{month}/{slug}">Read more &gt;</a>
	</div>
</section>
