import type { MovieDetails, MovieList } from '$lib/types';
import type { Load } from '@sveltejs/kit';
import * as api from '$lib/api';

export const load: Load = async ({
  fetch
}): Promise<{
  trending: MovieList;
  featured: MovieDetails;
}> => {
  const trending = await api.get<MovieList>({
    fetch,
    endpoint: 'trending/movie/day'
  });

  const featured = await api.get<MovieDetails>({
    fetch,
    endpoint: `movie/${trending.results[0].id}`,
    params: {
      append_to_response: 'images'
    }
  });

  return { trending, featured };
};
