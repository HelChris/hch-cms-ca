import { createGames } from "./ui/games/createGames.mjs";
import { url } from "./constants.mjs";

//switch function
const switchTheme = () => {
	// get root element and data-theme value::
	const rootElm = document.documentElement;
	let dataTheme = rootElm.getAttribute("data-theme"),
		newTheme;

	newTheme = dataTheme === "light" ? "dark" : "light";

	//set the new HTML attribute::
	rootElm.setAttribute("data-theme", newTheme);

	//Set the new local storage item::
	localStorage.setItem("theme", newTheme);
};

//Add event listener for the theme switcher::
document
	.querySelector("#theme-switcher")
	.addEventListener("click", switchTheme);


//all the games sorted by category::
async function getGames() {
	try {
		const response = await fetch(url);

		if (response.ok !== true) {
			throw new Error(`HTTP Error! status: ${response.status}`);
		}

		const games = await response.json();

		const groupedGames = Object.groupBy(games, (game) => game.genre);

		const actionContainer = document.querySelector("#action-games");
		createGames(actionContainer, groupedGames.Action);

		const horrorContainer = document.querySelector("#horror-games");
		createGames(horrorContainer, groupedGames.Horror);

		const sportsContainer = document.querySelector("#sports-games");
		createGames(sportsContainer, groupedGames.Sports);

		const adventureContainer = document.querySelector("#adventure-games");
		createGames(adventureContainer, groupedGames.Adventure);
	} catch (error) {
		console.error("Error fetching games:", error);
		const resultsContainer = document.querySelector("#container");
		resultsContainer.innerHTML = "";
		const errorParagraph = document.createElement("p");
		errorParagraph.className = "error";
		errorParagraph.textContent = `Oh no! An error has occured: "${error.message}"`;
		resultsContainer.appendChild(errorParagraph);
	}
}
getGames();
