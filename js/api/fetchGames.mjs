import { BASE_URL } from "/js/constants/api.mjs";

export async function fetchGames() {
	const response = await fetch(BASE_URL);

	console.log(response);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const json = await response.json();
	return json;
}
