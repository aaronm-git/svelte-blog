import { adminApi } from '$lib/utils/admin';

export async function load() {
	const authors = await adminApi.getAllAuthors();
	return {
		props: {
			authors
		}
	};
}
