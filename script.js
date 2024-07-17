const url = "https://api.thecatapi.com/v1/images/search";
console.log(url);
const section = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCat);

const randomCatPhoto = (json) => {
    let photo = json[0].url;

    // Clear previous content
    section.innerHTML = '';

    let card = document.createElement('div');
    card.classList.add("card");

    let image = document.createElement('img');
    image.src = photo;
    image.classList.add("random_cats");
    image.alt = "Random Cat";

    card.appendChild(image);
    section.appendChild(card);
}

async function getRandomCat() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("JSON", json);
        return randomCatPhoto(json);
    } catch (error) {
        console.error("Error fetching cat photo:", error);
    }
}
