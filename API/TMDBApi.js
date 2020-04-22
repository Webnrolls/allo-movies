const API_TOKEN = "c520fac854a4767b422a2528090af0be";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;

  console.log("url", url);

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function getImageFromAPI(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}

export function getFilmDetailFromApi(id) {
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=" +
    API_TOKEN +
    "&language=fr";

  console.log("url", url);

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
