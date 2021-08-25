const movieUl = document.getElementById("movie-container");

const addMoviesToDom = movies => {
  let allMovies = movies.map(movie => {
    let movieLi = document.createElement("li");
    movieLi.classList.add('#movieList-item')
    let newA = document.createElement("a");
    let newImage = document.createElement("img");
    newImage.src = movie.Poster;

    movieUl.appendChild(movieLi);
    movieLi.appendChild(newA);
    newA.appendChild(newImage);
  });
  allMovies.forEach(movie => {
    movieUl.appendChild(movie);
  });
};
addMoviesToDom(movies);
