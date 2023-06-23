import { strapi } from '$lib/utils/strapi';
import { error } from '@sveltejs/kit';
export async function load(context) {
	const year = context.params.year;
	const month = context.params.month;
	if (isNaN(year) || year.length !== 4 || isNaN(month) || month.length !== 2 || Number(month) < 1 || Number(month) > 12) {
		throw error(404, {
			message: 'Not found',
			code: 'NOT_FOUND'
		});
	}
	const posts = await strapi.getPostsByYearMonth(year, month);
	return {
		props: { posts }
	};
}
