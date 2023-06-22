<script>
	export let category;
	import { textColorByBackground } from '$lib/utils/color.js';
	const bgColor = category.color || null;
	const textColor = bgColor && textColorByBackground(bgColor);
</script>

<a href={`/categories/${category.slug}`} class="post-category {bgColor && 'custom-color'}" style={bgColor && `--color-bg: ${bgColor}; --color: ${textColor}`}>{category.name}</a>

<style>
	.post-category.custom-color {
		color: var(--color);
		background-color: var(--color-bg);
	}
</style>
