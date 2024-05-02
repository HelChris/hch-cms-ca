import { getQueryStringParam } from "./getQueryStringParam.mjs";
import { url } from "./constants.mjs";

//switch function
const switchTheme = () => {
	// get root element and data-theme value
	const rootElm = document.documentElement;
	let dataTheme = rootElm.getAttribute("data-theme"),
		newTheme;

	newTheme = dataTheme === "light" ? "dark" : "light";

	//set the new HTML attribute
	rootElm.setAttribute("data-theme", newTheme);

	//Set the new local storage item
	localStorage.setItem("theme", newTheme);
};

//Add event listener for the theme switcher
document
	.querySelector("#theme-switcher")
	.addEventListener("click", switchTheme);

//get the game details
async function getGame() {
	const id = getQueryStringParam("id");

	if (!id) {
		document.location.href = "/";
	}

	const gameUrl = `${url}/${id}`;

	try {
		const response = await fetch(gameUrl);

		if (response.ok === false) {
			throw new Error("There was an error fetching the game with id: " + id);
		}

		const game = await response.json();
		const resultsContainer = document.querySelector("#game-detail-page");
		resultsContainer.innerHTML = "";

		const section = document.createElement("section");
		section.className = "game-detail-page";
		resultsContainer.appendChild(section);

		const gameCardWrapper = document.createElement("div");
		gameCardWrapper.className = "gamecard-wrapper gamecard-wrapper-details";
		section.appendChild(gameCardWrapper);

		const imageWrapper = document.createElement("div");
		imageWrapper.className = "image-wrapper";
		gameCardWrapper.appendChild(imageWrapper);

		const img = document.createElement("img");
		img.src = game.image;
		img.className = "gamecard-image";
		img.alt = game.title;
		imageWrapper.appendChild(img);

		const detailsAndButton = document.createElement("div");
		detailsAndButton.className = "details-and-buttons";
		gameCardWrapper.appendChild(detailsAndButton);

		const gameDetailDiv = document.createElement("div");
		gameDetailDiv.className = "gamedetail";
		detailsAndButton.appendChild(gameDetailDiv);

		// append game details
		const details = [
			{ tag: "h1", text: `${game.title}` },
			{ tag: "p", text: `Price: $${game.price}` },
			{ tag: "p", text: `Genre: ${game.genre}` },
			{ tag: "p", text: `Released: ${game.released}` },
			{ tag: "p", text: `Age: ${game.ageRating}` },
			{ tag: "p", text: game.description, className: "game-description" },
		];

		details.forEach((detail) => {
			const element = document.createElement(detail.tag);
			element.textContent = detail.text;
			if (detail.className) {
				element.className = detail.className;
			}
			gameDetailDiv.appendChild(element);
		});

		// details.forEach((detail) => {
		// 	const element = document.createElement(detail.tag);
		// 	element.textContent = detail.text;
		// 	gameDetailDiv.appendChild(element);
		// });

		const gameCardButtons = document.createElement("div");
		gameCardButtons.className = "gamecard-buttons";
		detailsAndButton.appendChild(gameCardButtons);

		const addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "gamedetail-button button button-turquoise";
		addToCart.textContent = "Add to cart";
		addToCart.setAttribute("aria-label", `Add ${game.title} to cart`);
		gameCardButtons.appendChild(addToCart);
	} catch (error) {
		console.error(error);
		const resultsContainer = document.querySelector("#game-detail-page");
		resultsContainer.innerHTML = "";
		const errorParagraph = document.createElement("p");
		errorParagraph.className = "error";
		errorParagraph.textContent = `Oh no! An error has occured: "${error.message}"`;
		resultsContainer.appendChild(errorParagraph);
	}
}

getGame();
