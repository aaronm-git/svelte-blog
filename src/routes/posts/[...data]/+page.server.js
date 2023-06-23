import { error } from '@sveltejs/kit';
import { postsApi } from '$lib/utils/posts';
export async function load(context) {
	const [year, month, slug] = context.params.data.split('/');
	if (isNaN(year) || isNaN(month) || !slug || context.params.data.split('/').length > 3) {
		throw error(404, {
			message: 'Not found',
			code: 'NOT_FOUND'
		});
	}

	const post = await postsApi.getPostByYearMonthSlug({ year, month, slug });

	if (!post) {
		throw error(404, {
			message: 'Not found',
			code: 'NOT_FOUND'
		});
	}

	return {
		props: { post }
	};
}
