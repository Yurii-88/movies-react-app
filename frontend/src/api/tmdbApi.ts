const API_KEY = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const request = async (endpoint: string, params = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status}`);
  }

  return res.json();
};

export const getPopularMovies = (page = 1) => request('/movie/popular', { page });
export const searchMovies = (query: string, page = 1) => request('/search/movie', { query, page });
export const getMovieDetails = (movieId: number) => request(`/movie/${movieId}`);
