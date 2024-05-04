export function renderGames(targetElement, games) {
	const element = document.querySelector(targetElement);
	element.innerHTML = "";

	const gameHtml = games.map(function (game) {
		return createHtmlForGame(game);
	});

	console.log(gameHtml);
	element.append(...gameHtml);
}

function createHtmlForGame(game) {
	const { name, id } = game;
	const gameItem = document.createElement("a");
	gameItem.classList.add("game");
	gameItem.setAttribute("href", `game.html?id=${id}`);
	const title = document.createElement("h4");
	title.innerText = name;
	gameItem.appendChild(title);
	return gameItem;
}
