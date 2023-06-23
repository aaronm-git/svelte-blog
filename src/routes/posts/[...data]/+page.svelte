<script>
	import showdown from 'showdown';
    import PostMeta from '$lib/components/PostMeta.svelte';
    import { truncateText } from "$lib/utils/string";
	export let data;
	const { post } = data.props;

	const converter = new showdown.Converter();
	const text = post.text;
	const html = converter.makeHtml(text);
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta name="description" content={truncateText(post.text, 75)} />
</svelte:head>

{@html html}

<PostMeta {post} />


