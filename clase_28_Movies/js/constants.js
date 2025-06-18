const KEY = "208a7cecc8d4ed65ea73d6abac17b319";
const API = "https://api.themoviedb.org";
export const IMAGE = "https://image.tmdb.org/t/p/original";
export const TRENDING = `${API}/3/trending/movie/week?api_key=${KEY}&language=es_AR`;
export const TOPRATED = `${API}/3/movie/top_rated?api_key=${KEY}&language=es_AR`;
export const UPCOMING = `${API}/3/movie/upcoming?api_key=${KEY}&language=es_AR`;
export const LIMIT = 4;
