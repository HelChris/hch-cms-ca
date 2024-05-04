import { fetchGame } from "/js/api/fetchGame.mjs";
import { displayMessage } from "/js/ui/shared/displayMessage.mjs";
import { renderGame } from "/js/ui/games/renderGame.mjs";

export async function displayGame() {
	// get id from the query string
	const search = window.location.search;
	const params = new URLSearchParams(search);
	const id = params.get("id");

	if (!id) {
		return (location.href = "/");
	}

	try {
		const game = await fetchGame(id);
		console.log(game);
		renderGame("#game-container", game);
	} catch (error) {
		//display error to the user
		console.error(error);
		displayMessage(
			"#game-container",
			"error",
			"Oh no! There was an error fetching the game"
		);
	}
}
