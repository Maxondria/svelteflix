import type { Load } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { MovieDetails, Video } from '$lib/types';

export const load: Load = async ({
  params,
  fetch
}): Promise<{
  movie: MovieDetails;
  trailer?: Video;
}> => {
  const { id } = params;

  const movie = await api.get<MovieDetails>({
    fetch,
    endpoint: `movie/${id}`,
    params: {
      append_to_response: 'images,videos,recommendations'
    }
  });

  const trailer = movie.videos.results.find(
    (video) => video.official && video.site === 'YouTube' && ['Trailer', 'Teaser'].includes(video.type)
  );

  return { movie, trailer };
};
