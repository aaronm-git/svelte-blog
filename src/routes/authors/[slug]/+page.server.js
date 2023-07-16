import { postsApi } from '$lib/utils/posts';
import { adminApi } from '$lib/utils/admin';
import { error } from '@sveltejs/kit';

export async function load(context) {
	const authorId = context.params.slug;
	const author = await adminApi.getUserById(authorId);
	if (!authorId || !author) {
		throw error(404, {
			code: 'NOT_FOUND'
		});
	}
	const posts = await postsApi.getPostsByAuthorId(authorId);
	return {
		props: {
			posts
		}
	};
}
