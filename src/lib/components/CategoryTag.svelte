<script>
	export let category;
</script>

<a href={category.url} class="post-category post-category-{category.name.toLowercase()}">{category.name}</a>
