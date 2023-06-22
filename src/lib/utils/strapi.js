import { STRAPI_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
import { MAX_TRUNCATE_TEXT_LENGTH } from '$lib/constants/posts';
import axios from 'axios';
const bearer = `Bearer ${STRAPI_KEY}`;
class StrapiAPI {
	constructor() {
		this.baseUrl = baseUrl;
	}

	async getPosts(page = 1, pageSize = 25) {
		const posts = await this.#execFetch(`posts?populate=*`);
		const formattedPosts =
			posts.data.map((post) => {
				return {
					id: post.id,
					slug: post.attributes.slug,
					title: post.attributes.title,
					description: truncateText(post.attributes.text),
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
			}) || [];
		return formattedPosts;
	}

	getPost(id) {
		if (!id) {
			throw new Error('An id must be provided');
		}
		return this.#execFetch(`posts/${id}?populate=*`);
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

function truncateText(text, maxLength = MAX_TRUNCATE_TEXT_LENGTH) {
	if (text.length <= maxLength) {
		return text;
	}
	return text.substr(0, maxLength) + '...';
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
