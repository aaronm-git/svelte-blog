import { STRAPI_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
import axios from 'axios';
const bearer = `Bearer ${STRAPI_KEY}`;
class StrapiAPI {
	constructor() {
		this.baseUrl = baseUrl;
	}

	async getPosts(page = 1, pageSize = 25) {
		const posts = await this.#execFetch(`posts?populate=*`);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	getPost(id) {
		if (!id) {
			throw new Error('An id must be provided');
		}
		return this.#execFetch(`posts/${id}?populate=*`);
	}

	async getPostBySlug(slug) {
		const posts = await this.#execFetch(`posts?filters[slug][$eq]=${slug}&populate=*`);
		if (!posts || posts.length === 0) {
			return null;
		}
		const formattedPosts = formatPost(posts);
		return formattedPosts[0];
	}

	async getPostByParams({ year, month, slug }) {
		const query = `filters[slug][$eq]=${slug}`;
		const posts = await this.#execFetch(`posts?${query}&populate=*`);
		console.log('posts', posts);
		if (!posts || posts.length === 0) {
			return null;
		}
		const formattedPosts = formatPost(posts);
		return formattedPosts[0];
	}

	async getPostsByYear(year) {
		if (!year) {
			throw new Error('A year must be provided');
		}
		const posts = await this.#execFetch(`posts?filters[publishedAt][$gte]=${year}-01-01T00:00:00Z&filters[publishedAt][$lt]=${Number(year) + 1}-01-01T00:00:00Z&populate=*`);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	#execFetch(path) {
		return axios
			.get(`${this.baseUrl}/${path}`, {
				headers: {
					Authorization: bearer
				}
			})
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}
}

export const strapi = new StrapiAPI();

function formatPost(posts) {
	return (
		posts.data.map((post) => {
			return {
				id: post.id,
				slug: post.attributes.slug,
				title: post.attributes.title,
				text: post.attributes.text,
				isPinned: post.attributes.isPinned,
				categories: getCatagories(post.attributes.categories.data),
				createdAt: post.attributes.createdAt,
				updatedAt: post.attributes.updatedAt,
				publishedAt: post.attributes.publishedAt,
				author: {
					name: post.attributes.author?.data.attributes.firstname + ' ' + post.attributes.author?.data.attributes.lastname,
					imageUrl: post.attributes.author?.data.attributes.imageUrl || `https://i.pravatar.cc/48?id=${post.attributes.author?.id}`,
					slug: post.attributes.author?.data.attributes.slug
				}
			};
		}) || []
	);
}

function getCatagories(categories) {
	return categories.map((category) => {
		return {
			id: category.id,
			name: category.attributes.name,
			slug: `${category.attributes.slug}`,
			color: category.attributes.color
		};
	});
}
