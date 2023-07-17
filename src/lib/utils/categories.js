import { STRAPI_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
import axios from 'axios';
const bearer = `Bearer ${STRAPI_KEY}`;

class CategoriesApi {
	constructor() {
		this.baseUrl = baseUrl;
	}

	getCategories() {
		const categories = this.#execFetch(`/api/categories`);
		return categories;
	}

	async getCategoryBySlug(slug) {
		const query = `filters[slug][$eq]=${slug}`;
		const categories = await this.#execFetch(`/api/categories?${query}`);
		if (!categories || categories.data.length === 0) {
			return null;
		}
		return categories.data[0];
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

export const categoriesApi = new CategoriesApi();
