import { viewToViewTypeMap, views } from '$lib/views';
import type { Load } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { MovieList, MovieListResult } from '$lib/types';

export const load: Load = async ({
  params,
  url,
  fetch
}): Promise<{
  title: string;
  endpoint: string;
  view: 'trending' | 'now-playing' | 'upcoming';
  movies: MovieListResult[];
  nextPage: number | null;
  infinite: boolean;
}> => {
  const { view: param } = params;
  const type = viewToViewTypeMap[param as 'trending' | 'now-playing' | 'upcoming'];

  const { title, endpoint } = views[type];

  const page = url.searchParams.get('page') ?? '1';

  const movies = await api.get<MovieList>({
    fetch,
    endpoint,
    params: { page }
  });

  return {
    title,
    endpoint,
    view: param as 'trending' | 'now-playing' | 'upcoming',
    movies: movies.results,
    nextPage: movies.page < movies.total_pages ? movies.page + 1 : null,
    infinite: true
  };
};
