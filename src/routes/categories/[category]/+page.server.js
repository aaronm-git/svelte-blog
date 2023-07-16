import { postsApi } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export async function load(context) {
	const category = context.params.category;
	const posts = await postsApi.getPostsByCategory(category);
	if (!category) {
		throw error(404, {
			code: 'NOT_FOUND'
		});
	}
	return {
		props: {
			category,
			posts
		}
	};
}
