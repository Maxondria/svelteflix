import type { Load } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { MovieList, MovieListResult } from '$lib/types';

export const load: Load = async ({
  url,
  fetch
}): Promise<{
  query: string;
  movies: MovieListResult[];
}> => {
  const query = url.searchParams.get('query');

  if (!query) {
    return { query: '', movies: [] };
  }
  const movies = await api.get<MovieList>({ fetch, endpoint: 'search/movie', params: { query } });
  return { query, movies: movies.results };
};
