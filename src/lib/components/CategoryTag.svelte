<script>
	export let category;
	console.log(category);
</script>

<a href={category.url} class="post-category post-category-{category.name.toLowerCase().replace(' ', '-')}">{category.name}</a>
