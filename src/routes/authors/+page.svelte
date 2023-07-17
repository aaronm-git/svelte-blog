<script>
	export let data;
	const authors = data.props.authors || [];
</script>

<h1>All Authors</h1>

{#each authors as author}
	<div>
		<h2>{author.firstname} {author.lastname}</h2>
		<p>{author.bio}</p>
	</div>
{/each}
