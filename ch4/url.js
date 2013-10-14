function buildUrl() {
	var qs = "?debut=true";

	with (location) {
		var url = href + qs;
	}

	return url;
}