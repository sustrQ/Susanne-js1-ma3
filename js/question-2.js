// Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector("div");

async function APIendpoint() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);

    resultContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      let name = results[i].name;
      let rating = results[i].rating;
      let no_tags = results[i].tags.length;

      console.log(name + rating + no_tags);

      if (i === 7) {
        break;
      }

      resultContainer.innerHTML += `<div class="style"><p>Name:</p>${name} <p>Rating:</p>${rating} <p>Tags:</p>${no_tags}</div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

APIendpoint();
