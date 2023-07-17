import { STRAPI_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
import axios from 'axios';
const bearer = `Bearer ${STRAPI_KEY}`;

class AuthorsApi {
	constructor() {
		this.baseUrl = baseUrl;
	}

	async getAuthors() {
		const authors = await this.#execFetch(`/api/authors`);
		return authors;
	}

    async getAuthorBySlug(slug) {
        const query = `filters[slug][$eq]=${slug}`;
        const authors = await this.#execFetch(`/api/authors?${query}`);
        if (!authors || authors.data.length === 0) {
            return null;
        }
        return authors.data[0];
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

export const authorsApi = new AuthorsApi();
