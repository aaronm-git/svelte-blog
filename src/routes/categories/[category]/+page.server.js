import { postsApi } from '$lib/utils/posts';
import { categoriesApi } from '$lib/utils/categories';
import { error } from '@sveltejs/kit';

export async function load({ params: { category } }) {
	const categoryFound = await categoriesApi.getCategoryBySlug(category);
	if (!categoryFound) {
		throw error(404, {
			code: 'NOT_FOUND'
		});
	}
	const posts = await postsApi.getPostsByCategory(category);

	return {
		props: {
			category: categoryFound.attributes.name,
			posts
		}
	};
}
