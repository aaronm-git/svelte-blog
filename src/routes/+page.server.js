import { posts as mockPosts } from '$lib/mock/posts.js';
import { postsApi } from '$lib/utils/posts';
export async function load() {
	const posts = await postsApi.getPosts();
	return {
		// posts: [...mockPosts, ...posts]
		posts: posts
	};
}
