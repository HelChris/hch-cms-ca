export function displayMessage(container = "#message", messageType, message) {
	const element = document.querySelector(container);
	if (element) {
		element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
	} else {
		console.error(`Element with ID '${container}' not found in the DOM.`);
	}
}
