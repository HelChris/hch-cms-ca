export function createGames(container, games) {
	container.innerHTML = "";

	games.forEach(function (game) {
		const gameCard = document.createElement("div");
		gameCard.className = "gamecard-wrapper";

		const imageWrapper = document.createElement("div");
		imageWrapper.className = "image-wrapper";
		gameCard.appendChild(imageWrapper);

		const imgLink = document.createElement("a");
		imgLink.href = `gamedetail.html?id=${game.id}`;

		const img = document.createElement("img");
		img.src = game.images[0].src;
		img.className = "gamecard-image";
		img.alt = game.name;

		imgLink.appendChild(img);
		imageWrapper.appendChild(imgLink);

		const gameCardCopy = document.createElement("div");
		gameCardCopy.className = "gamecard-copy";
		gameCard.appendChild(gameCardCopy);

		const name = document.createElement("h3");
		name.textContent = game.name;
		gameCardCopy.appendChild(name);

		const price = document.createElement("p");
		price.textContent = `$${game.prices.price / 100}`;
		gameCardCopy.appendChild(price);

		const genre = document.createElement("p");
		genre.textContent = game.genre;
		gameCardCopy.appendChild(genre);

		const gameCardButtons = document.createElement("div");
		gameCardButtons.className = "gamecard-buttons";
		gameCard.appendChild(gameCardButtons);

		const readMore = document.createElement("a");
		readMore.href = "gamedetail.html?id=" + game.id;
		readMore.className = "button button-white";
		readMore.textContent = "Game details";
		readMore.setAttribute("aria-label", `Read more about ${game.name}`);
		gameCardButtons.appendChild(readMore);

		const addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "button button-turquoise";
		addToCart.textContent = "Add to cart";
		addToCart.setAttribute("aria-label", `Add ${game.name} to cart`);
		gameCardButtons.appendChild(addToCart);

		container.appendChild(gameCard);
	});
}
