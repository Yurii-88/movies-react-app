const API_KEY = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const request = async (endpoint, params = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);

  url.search = new URLSearchParams({
    ...params,
  });

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status}`);
  }

  return res.json();
};

// API methods
export const getPopularMovies = (page = 1) => request('/movie/popular', { page });
export const searchMovies = (query, page = 1) => request('/search/movie', { query, page });
export const getMovieDetails = (movieId) => request(`/movie/${movieId}`);
