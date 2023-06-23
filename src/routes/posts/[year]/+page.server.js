import { strapi } from '$lib/utils/strapi';
import { error } from '@sveltejs/kit';
export async function load(context) {
	const year = context.params.year;
	if (isNaN(year) || year.length !== 4) {
		throw error(404, {
			message: 'Not found',
			code: 'NOT_FOUND'
		});
	}
	const posts = await strapi.getPostsByYear(year);
	return {
		props: { posts }
	};
}
