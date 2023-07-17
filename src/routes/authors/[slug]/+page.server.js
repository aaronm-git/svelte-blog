import { postsApi } from '$lib/utils/posts';
import { authorsApi } from '$lib/utils/authors';
import { error } from '@sveltejs/kit';

export async function load({ params: { slug } }) {
	const author = await authorsApi.getAuthorBySlug(slug);
	if (!author) {
		throw error(404, {
			code: 'NOT_FOUND'
		});
	}

	const posts = await postsApi.getPostsByAuthorSlug(slug);

	return {
		props: {
			posts,
			name: author.attributes.name
		}
	};
}
