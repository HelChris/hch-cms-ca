function createGameCard(game) {
	const section = document.createElement("section");
	section.className = "product-list";

	const gameCard = document.createElement("div");
	gameCard.className = "gamecard-wrapper";
	section.appendChild(gameCard);

	const imageWrapper = document.createElement("div");
	imageWrapper.className = "image-wrapper";
	gameCard.appendChild(imageWrapper);

	const imgLink = document.createElement("a");
	imgLink.href = `gamedetail.html?id=${game.id}`;

	const img = document.createElement("img");
	img.src = game.image;
	img.className = "gamecard-image";
	img.alt = game.title;

	imgLink.appendChild(img);
	imageWrapper.appendChild(imgLink);

	const gameCardCopy = document.createElement("div");
	gameCardCopy.className = "gamecard-copy";
	gameCard.appendChild(gameCardCopy);

	const title = document.createElement("h3");
	title.textContent = game.title;
	gameCardCopy.appendChild(title);

	const price = document.createElement("p");
	price.textContent = `$${game.price}`;
	gameCardCopy.appendChild(price);

	const genre = document.createElement("p");
	genre.textContent = game.genre;
	gameCardCopy.appendChild(genre);

	const gameCardButtons = document.createElement("div");
	gameCardButtons.className = "gamecard-buttons";
	gameCard.appendChild(gameCardButtons);

	const readMore = document.createElement("a");
	readMore.href = `game.html?id=${game.id}`;
	readMore.className = "button button-white";
	readMore.textContent = "Game details";
	readMore.setAttribute("aria-label", `Read more about ${game.title}`);
	gameCardButtons.appendChild(readMore);

	const addToCart = document.createElement("a");
	addToCart.href = "cart.html";
	addToCart.className = "button button-turquoise";
	addToCart.textContent = "Add to cart";
	addToCart.setAttribute("aria-label", `Add ${game.title} to cart`);
	gameCardButtons.appendChild(addToCart);

	return section;
}

// Assuming `games` is your array of game objects and `resultsContainer` is the container where you want to append the game cards.
games.forEach((game) => {
	const gameCard = createGameCard(game);
	resultsContainer.appendChild(gameCard);
});
