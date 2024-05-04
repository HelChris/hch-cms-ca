export function renderGameThumbnails(targetElement, games) {
	const element = document.querySelector(targetElement);
	element.innerHTML = "";

	const thumbnailHtml = games.map(function (game) {
		return createHtmlForGameThumbnail(game);
	});

	console.log(thumbnailHtml);
	element.append(...thumbnailHtml);
}

function createHtmlForGameThumbnail(game) {
	const src =
		game.images?.[0]?.thumbnail || "https://placehold.co/600x400/EEE/31343C";

	const alt = game.images?.[0]?.alt || "No image available";

	const thumbnailContainer = document.createElement("div");
	thumbnailContainer.classList.add("thumbnail");
	thumbnailContainer.style.backgroundImage = `url(${src})`;

	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);

	thumbnailContainer.appendChild(img);

	const { id, name } = game;
	const gameItem = document.createElement("a");
	gameItem.classList.add("game");
	gameItem.setAttribute("href", `game.html?id=${id}`);
	const title = document.createElement("h4");
	title.innerText = name;
	gameItem.appendChild(title);

	thumbnailContainer.appendChild(gameItem);
	return thumbnailContainer;
}
