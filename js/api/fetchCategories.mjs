import { BASE_URL } from "/js/constants/api.mjs";

export async function fetchCategories(genre) {
	const url = `${BASE_URL}${genre}`;
	const response = await fetch(url);

	console.log(response);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const json = await response.json();
	return json;
}
