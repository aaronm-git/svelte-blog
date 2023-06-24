<script>
    export let data;
    const {category, posts} = data.props;
    import Posts from '$lib/components/Posts.svelte';
</script>

<Posts {posts} subhead="{category}"/>
