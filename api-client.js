const API_KEY = 'd525356fd35e9ae1ca7667106bb38632';

const getMovieGenres = async () => {
    const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d525356fd35e9ae1ca7667106bb38632&language=en-US';
    try {
    const res = await fetch(apiUrl, {method: "GET"});
    const data = await res.json(); 
    console.log("Data", data);
    return data;   
    
    } catch (err) {
        console.log(err)
    }

};

const getMovieById = async movieId => {
    const movieByIDEndpoint = `https://api.themoviedb.org/3/find/tt0091306?external_source=imdb_id&api_key=${API_KEY}`;
    try {
      const res = await fetch(movieByIDEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

const getTopRatedMovies = async () => {
    const topRatedMoviesSource = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    try {
      const res = await fetch(topRatedMoviesSource, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMoviesFrom1975 = async year => {
    const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=d525356fd35e9ae1ca7667106bb38632&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&year=1975`;
    try {
      const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMoviesInGenreId = async genreId => {
    const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=d525356fd35e9ae1ca7667106bb38632&language=en-US&include_adult=false&include_video=false&page=1&with_genres=action`;
    try {
      const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };










