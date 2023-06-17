import { posts } from '$lib/mock/posts.js';

export async function load() {
	return {
		posts
	};
}
