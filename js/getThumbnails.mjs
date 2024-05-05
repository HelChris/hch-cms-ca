import { url } from "./constants.mjs";

export async function getThumbnails() {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("HTTP Error! status: ${response.status}");
		}

		const games = await response.json();
		const resultsContainer = document.querySelector("#thumbnailsContainer");
		resultsContainer.innerHTML = "";

		games.forEach((game) => {
			const section = document.createElement("section");
			section.className = "thumbnails";
			resultsContainer.appendChild(section);

			const imageWrapper = document.createElement("div");
			imageWrapper.className = "image-wrapper";
			section.appendChild(imageWrapper);

			const imgLink = document.createElement("a");
			imgLink.href = `gamedetail.html?id=${game.id}`;

			const img = document.createElement("img");
			img.src = game.images[0].thumbnail;
			img.className = "gamecard-image";
			img.alt = game.name;

			imgLink.appendChild(img);
			imageWrapper.appendChild(imgLink);
		});
	} catch (error) {
		console.error("Error fetching games:", error);
		const resultsContainer = document.querySelector("#container");
		resultsContainer.innerHTML = "";
		const errorParagraph = document.createElement("p");
		errorParagraph.className = "error";
		errorParagraph.textContent = `Oh no! An error has occured when fetching the thumbnails: "${error.message}"`;
		resultsContainer.appendChild(errorParagraph);
	}
}
