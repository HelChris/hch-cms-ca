import { displayGame } from "/js/events/displayGame.mjs";
import { displayGames } from "/js/events/displayGames.mjs";
// import { displayCategories } from "/js/events/displayCategories.mjs";

const { pathname } = location;

console.log(pathname);

switch (pathname) {
	case "/":
	case "/index.html":
		displayGames();
		break;
	// case "/games.html":
	// 	displayCategories();
	// 	break;
	case "/game.html":
		displayGame();
		break;
}

// ---- light/dark theme switch function -----------
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

// ---------------------------------------------------
