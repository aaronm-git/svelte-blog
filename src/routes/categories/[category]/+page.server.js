import { postsApi } from '$lib/utils/posts';

export async function load(context) {
	const category = context.params.category;
	return {
		props: {
			category,
			posts: await postsApi.getPostsByCategory(category)
		}
	};
}
