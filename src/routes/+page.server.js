import { posts as mockPosts } from '$lib/mock/posts.js';
import { strapi } from '$lib/utils/strapi.js';

export async function load() {
	const posts = await strapi.getPosts();
	return {
		// posts: [...mockPosts, ...posts]
		posts: posts
	};
}
