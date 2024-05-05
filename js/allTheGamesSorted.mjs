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

Object.groupBy = function (arr, keyFunc) {
	return arr.reduce((acc, obj) => {
		let key = keyFunc(obj);
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});
};

//all the games sorted by category::
async function getGamesSorted() {
	try {
		const response = await fetch(url);

		if (response.ok !== true) {
			throw new Error(`HTTP Error! status: ${response.status}`);
		}

		const games = await response.json();

		const groupedGames = Object.groupBy(games, (game) => {
			const genreAttribute = game.attributes.find(
				(attr) => attr.name === "Genre"
			);
			return genreAttribute ? genreAttribute.terms[0].name : null;
		});

		if (groupedGames.Action) {
			const actionContainer = document.querySelector("#action-games");
			createGames(actionContainer, groupedGames.Action);
		}

		if (groupedGames.Horror) {
			const horrorContainer = document.querySelector("#horror-games");
			createGames(horrorContainer, groupedGames.Horror);
		}

		if (groupedGames.Sports) {
			const sportsContainer = document.querySelector("#sports-games");
			createGames(sportsContainer, groupedGames.Sports);
		}

		if (groupedGames.Adventure) {
			const adventureContainer = document.querySelector("#adventure-games");
			createGames(adventureContainer, groupedGames.Adventure);
		}
	} catch (error) {
		console.log(error);
	}
}

getGamesSorted();