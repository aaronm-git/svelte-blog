import { STRAPI_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
import axios from 'axios';
const bearer = `Bearer ${STRAPI_KEY}`;
import dayjs from 'dayjs';
class PostsApi {
	constructor() {
		this.baseUrl = baseUrl;
	}

	async getPosts(page = 1, pageSize = 25) {
		const posts = await this.#execFetch(`/api/posts?populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true`);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	getPost(id) {
		if (!id) {
			throw new Error('An id must be provided');
		}
		return this.#execFetch(`posts/${id}?populate=*`);
	}

	async getPostByParams({ year, month, slug }) {
		const query = `filters[slug][$eq]=${slug}`;
		const posts = await this.#execFetch(`/api/posts?${query}&populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true`);
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
		const startISO = dayjs(`${year}-01-01`).toISOString();
		const endISO = dayjs(`${Number(year) + 1}-01-01`).toISOString();
		const query = `/api/posts?filters[publishedAt][$gte]=${startISO}&filters[publishedAt][$lt]=${endISO}&populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true`;
		const posts = await this.#execFetch(query);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	async getPostsByYearMonth(year, month) {
		const startISO = dayjs(`${year}-${month}-01`).toISOString();
		const endISO = (function () {
			if (Number(month) === 12) {
				return dayjs(`${Number(year) + 1}-01`).toISOString();
			}
			return dayjs(`${year}-${Number(month) + 1}-01`).toISOString();
		})();
		if (!year || !month) {
			throw new Error('A year and month must be provided');
		}
		const query = `/api/posts?filters[publishedAt][$gte]=${startISO}&filters[publishedAt][$lt]=${endISO}&populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true`;
		const posts = await this.#execFetch(query);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	async getPostByYearMonthSlug({ year, month, slug }) {
		const startISO = dayjs(`${year}-${month}-01`).toISOString();
		const endISO = (function () {
			if (Number(month) === 12) {
				return dayjs(`${Number(year) + 1}-01`).toISOString();
			}
			return dayjs(`${year}-${Number(month) + 1}-01`).toISOString();
		})();
		if (!year || !month || !slug) {
			throw new Error('A year, month, and slug must be provided');
		}
		const query = `/api/posts?filters[publishedAt][$gte]=${startISO}&filters[publishedAt][$lt]=${endISO}&filters[slug][$eq]=${slug}&populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true`;
		const posts = await this.#execFetch(query);
		const formattedPosts = formatPost(posts);
		return formattedPosts[0];
	}

	async getPostsByCategory(category) {
		if (!category) {
			throw new Error('A category must be provided');
		}
		const categoryName = category.toLowerCase();
		const query = `/api/posts?&populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true&filters[categories][slug][$eq]=${categoryName}`;
		const posts = await this.#execFetch(query);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	async getPostsByAuthorId(authorId) {
		if (!authorId) {
			throw new Error('An author id must be provided');
		}
		const query = `/api/posts?populate=*&filters[author][id][$eq]=${authorId}`;
		const posts = await this.#execFetch(query);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	async getPostsByAuthorSlug(authorSlug) {
		if (!authorSlug) {
			throw new Error('An author slug must be provided');
		}
		const query = `/api/posts?populate[author][populate][0]=user&populate[author][populate][1]=image&populate[categories]=true&filters[author][slug][$eq]=${authorSlug}`;
		const posts = await this.#execFetch(query);
		const formattedPosts = formatPost(posts);
		return formattedPosts;
	}

	#execFetch(path) {
		return axios
			.get(`${this.baseUrl}${path}`, {
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

function formatPost(posts) {
	return posts.data.map((post) => {
		return {
			id: post.id,
			slug: post.attributes.slug,
			title: post.attributes.title,
			text: post.attributes.text,
			previewText: post.attributes.previewText,
			isPinned: post.attributes.isPinned,
			categories: getCatagories(post.attributes.categories.data),
			createdAt: post.attributes.createdAt,
			updatedAt: post.attributes.updatedAt,
			publishedAt: post.attributes.publishedAt,
			author: {
				id: post.attributes.author.data.attributes.user.data.id,
				name: post.attributes.author.data.attributes.name,
				imageUrl: baseUrl + post.attributes.author.data.attributes.image.data.attributes.url,
				slug: post.attributes.author?.data.attributes.slug
			}
		};
	});
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

export const postsApi = new PostsApi();
