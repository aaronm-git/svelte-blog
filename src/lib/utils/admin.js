// import { STRAPI_KEY } from '$env/static/private';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
import { STRAPI_ADMIN_EMAIL, STRAPI_ADMIN_PASSWORD } from '$env/static/private';
import axios from 'axios';
// const bearer = `Bearer ${STRAPI_KEY}`;

class AdminApi {
	constructor() {
		this.baseUrl = baseUrl + '/admin';
		this.token = null;
	}

	async getUserById(id) {
		if (!id) {
			throw new Error('An id must be provided');
		}
		const result = await this.#execFetch(`/users/${id}`);
		if (!result) {
			return null;
		}
		return result.data.data;
	}

	async #execFetch(path) {
		const authorization = await this.#authenticate();
		const result = await axios.get(`${this.baseUrl}${path}`, {
			headers: {
				Authorization: authorization
			},
			validateStatus: function (status) {
				return status < 500;
			}
		});
		return result;
	}

	async #authenticate() {
		if (!this.token) {
			const response = await axios.post(`${this.baseUrl}/login`, {
				email: STRAPI_ADMIN_EMAIL,
				password: STRAPI_ADMIN_PASSWORD
			});
			this.token = response.data.data.token;
		}
		return 'Bearer ' + this.token;
	}
}

export const adminApi = new AdminApi();
