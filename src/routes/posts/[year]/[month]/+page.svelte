<script>
	import { page } from '$app/stores';
	import dayjs from 'dayjs';
	import Posts from '$lib/components/Posts.svelte';
	const year = $page.params.year;
	const month = $page.params.month;
	const dateFormat = dayjs(`${year}-${month}-01`).format('MMMM YYYY');
	export let data;
	const { posts } = data.props;
</script>

<Posts {posts} subhead="Posts from {dateFormat}" />
