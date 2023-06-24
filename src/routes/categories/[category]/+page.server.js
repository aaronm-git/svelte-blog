import { postsApi } from '$lib/utils/posts';

export async function load(context) {
	// console.log('context', context);
	const category = context.params.category;
    console.log('category', category);
	return {
		props: {
			category,
			posts: await postsApi.getPostsByCategory(category)
		}
	};
}
