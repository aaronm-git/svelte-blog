// find the best text color for a given background color
export function textColorByBackground(backgroundColor) {
	const rgb = hexToRgb(backgroundColor);
	const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
	return brightness >= 128 ? 'black' : 'white';
}

function hexToRgb(hex) {
    const hexValue = hex.replace('#', '');
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
    return { r, g, b };
}
