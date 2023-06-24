<script>
	import showdown from '$lib/utils/showdown';
	import PostMeta from '$lib/components/PostMeta.svelte';
	import { truncateText } from '$lib/utils/string';
	export let data;
	const { post } = data.props;

	const text = post.text;
	const html = showdown.makeHtml(text);
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={truncateText(post.text, 75)} />
</svelte:head>

<h1>{post.title}</h1>

{@html html}

<PostMeta {post} />

<style>
	@media screen and (min-width: 48em) {
		h1 {
			font-size: 2.5em;
		}
	}

	:global(.post-img) {
		border-radius: 0.25em;
		max-height: 250px;
	}
</style>
