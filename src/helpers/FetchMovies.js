export const FetchMovies = async (searchValue) => {
  const trendUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=695754c23561027f8bc5276809675df4";
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=695754c23561027f8bc5276809675df4&language=en-US&query=${searchValue}&page=1&include_adult=false`;
  const response = await fetch(searchValue ? searchUrl : trendUrl);
  const movieData = await response.json();
  localStorage.setItem("movieArr", JSON.stringify(movieData?.results));
};
