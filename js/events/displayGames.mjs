import { fetchGames } from "/js/api/fetchGames.mjs";
import { displayMessage } from "/js/ui/shared/displayMessage.mjs";
import { renderGameThumbnails } from "/js/ui/games/renderGameThumbnail.mjs";
import { renderGames } from "/js/ui/games/renderGames.mjs";

export async function displayGames() {
	console.log("displayGames");
	try {
		const games = await fetchGames();
		console.log(games);
		renderGames("#games-container", games);
		renderGameThumbnails("#thumbnails-container", games);
		//display products
	} catch (error) {
		//display error to the user
		console.error(error);
		displayMessage(
			"#games-container",
			"error",
			"Oh no! There was an error fetching the games"
		);
	}
}
