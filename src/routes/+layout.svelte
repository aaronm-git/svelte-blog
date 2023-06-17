<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
</script>

<svelte:head>
	<title>Blog &ndash; Layout Examples &ndash; Pure</title>
	<meta name="description" content="A layout example that shows off a blog page with a list of posts.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/css/pure-min.css">
	<link rel="stylesheet" href="/css/grids-responsive.css">
	<link rel="stylesheet" href="/css/styles.css">
</svelte:head>



<div id="layout" class="pure-g">
	<Sidebar />
	<PageContainer>
		<slot />
	</PageContainer>
</div>