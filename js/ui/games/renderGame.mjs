export function renderGame(targetElement, game) {
	const { name } = game;
	document.title = `${name} | ${document.title}`;
}
