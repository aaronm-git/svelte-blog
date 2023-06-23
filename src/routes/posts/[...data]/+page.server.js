import { error } from '@sveltejs/kit';
import { strapi } from '$lib/utils/strapi';
export async function load(context) {
	console.log('[...data]/+page.server.js');
	const [year, month, slug] = context.params.data.split('/');

	if (isNaN(year) || isNaN(month) || !slug || context.params.data.split('/').length > 3) {
		throw error(404, {
			message: 'Not found',
			code: 'NOT_FOUND'
		});
	}

	const post = await strapi.getPostByYearMonthSlug({ year, month, slug });

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
