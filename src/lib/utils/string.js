import { MAX_TRUNCATE_TEXT_LENGTH } from '$lib/constants/posts';

export function truncateText(text, maxLength = MAX_TRUNCATE_TEXT_LENGTH) {
	if (text.length <= maxLength) {
		return text;
	}
	return text.substr(0, maxLength) + '...';
}
