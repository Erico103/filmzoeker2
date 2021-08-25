const movieUl = document.getElementById("movie-container");
const radioGroup = document.getElementsByClassName('radio-group')
const radioButtons = document.querySelectorAll("input");




const addMoviesToDom = movies => {
  movies.forEach(movie => {
    let movieLi = document.createElement("li");
    movieLi.classList.add('movieList-item')
    let newA = document.createElement("a");
    let newImage = document.createElement("img");
    newImage.src = movie.Poster;

    movieUl.appendChild(movieLi);
    movieLi.appendChild(newA);
    newA.appendChild(newImage);
  });
};
addMoviesToDom(movies);

const addEventListeners = () => {
  radioButtons.forEach((radioBtn) => {
    radioBtn.addEventListener("change", () => {
      handleOnChangeEvent(event)
    });
  });
};
addEventListeners();

const handleOnChangeEvent = event => {
  switch (event.target.value) {
    case "batman":
      
    removeMoviesFromDom()
    filterMovies('batman')
     
          
      
      break;
    case "avengers":
     removeMoviesFromDom()
     filterMovies('avengers')
      console.log("ík ben een Avenger");
      break
    case "x-men":
      removeMoviesFromDom()
      filterMovies('x-men')
            console.log("ik ben een x man");
      break
    case "princess":
      removeMoviesFromDom()
      filterMovies('princess')
      
      console.log("ik ben een princess");
      break
    case "newreleases":
      addMoviesToDom()

      console.log('ik ben willekeurig')
      break
      default:

      console.log('íkben default')

      break
  }
};

const filterMovies = (wordInMovieTitle) => {
  const result = movies.filter((item) => {
    return item.Title.includes(wordInMovieTitle);
  });
 
  addMoviesToDom(result);
};

// filterLatestMovies
const filterLatestMovies = () => {
  const result = movies.filter((movie) => {
    return parseInt(movie.Year) >= 2014;
  });
  
  addMoviesToDom(result);
};

const removeMoviesFromDom = () => {
  let listItems = document.getElementsByClassName("movieList-item");
  let arrayListItems = Array.from(
    document.getElementsByClassName("movieList-item")
  );
  arrayListItems.forEach((item) => {
    let removedItem = movieUl.removeChild(listItems[0]);
  });
};