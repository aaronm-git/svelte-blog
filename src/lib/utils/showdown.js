import showdown from 'showdown';
import { PUBLIC_STRAPI_URL as baseUrl } from '$env/static/public';
// custom extensions
const urlConcatExtension = {
	type: 'output',
	regex: /<img src="(.+?)"/g,
	replace: `<img class="post-img" src="${"http://127.0.0.1:1337"}$1"`
};

export default new showdown.Converter({ extensions: [urlConcatExtension] });
