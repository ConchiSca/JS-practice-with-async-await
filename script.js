const JumpingJackFlash_IMDBID = "tt0091306";

const listMovieGenres = async () => {
    const movieGenresList = document.getElementById("movieGenresList");
    const data = await getMovieGenres();
    data.genres.forEach(movieGenre => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `genre name: ${movieGenre.name}, id: ${movieGenre.id}`
      );
      li.appendChild(liContent);
      movieGenresList.append(li);
    });
  };

listMovieGenres(movieGenresList);

const myTopMovie = async () => {
    const data = await getMovieById("tt0091306");
    const movie = data.movie_results[0];
    const topMovieName = document.getElementById("myTopMovie");
    topMovieName.appendChild(document.createTextNode(movie.title));
  };

myTopMovie();


const topRatedMovies = async () => {
    const topRatedList = document.getElementById("topRated");
    const data = await getTopRatedMovies();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `${movie.title}, rating: ${movie.vote_average}`
      );
      li.appendChild(liContent);
      topRatedList.append(li);
    });
  };

topRatedMovies();

const listTopRatedMoviesFrom = async year => {
    const topRatedList = document.getElementById("topRatedFromYear");
    topRatedList.innerHTML = "";
    const data = await getTopRatedMoviesFrom1975(year);
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
      );
      li.appendChild(liContent);
      topRatedList.append(li);
    });
  };

  listTopRatedMoviesFrom();

  const topRatedMoviesInGenre = async genreId => {
    const topRatedList = document.getElementById("topInGenre");
    topRatedList.innerHTML = "";
    const data = await getTopRatedMoviesInGenreId(genreId);
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
      );
      li.appendChild(liContent);
      topRatedList.append(li);
    });
  };

  topRatedMoviesInGenre();