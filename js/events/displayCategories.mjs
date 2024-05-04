
function createGames(container, games) {
	games.forEach((game) => {
		const gameElement = document.createElement("div");
		gameElement.textContent = game.name; // replace 'name' with the actual property name
		container.appendChild(gameElement);
	});
}

function groupBy(array, keyGetter) {
	const result = {};
	array.forEach((item) => {
		const key = keyGetter(item);
		if (!result[key]) {
			result[key] = [];
		}
		result[key].push(item);
	});
	return result;
}

const groupedGames = groupBy(games, (game) => game.genre);

const actionContainer = document.querySelector("#action-games");
createGames(actionContainer, groupedGames["Action"]);

const horrorContainer = document.querySelector("#horror-games");
createGames(horrorContainer, groupedGames["Horror"]);

const sportsContainer = document.querySelector("#sports-games");
createGames(sportsContainer, groupedGames["Sports"]);

const adventureContainer = document.querySelector("#adventure-games");
createGames(adventureContainer, groupedGames["Adventure"]);
