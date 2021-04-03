function getUrlParameter(url, param) {
	const pageUrl = url.substring(url.indexOf('?') + 1);

	const obj = Object.assign(
		...pageUrl
			.split('&')
			.map((s) => s.split('='))
			.map(([key, value]) => ({ [key]: value })),
	);

	if (obj[param]) {
		return obj[param];
	} else {
		return false;
	}
}