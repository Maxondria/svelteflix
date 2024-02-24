<script lang="ts">
  import { smoothload } from '$lib/actions';
  import { media } from '$lib/api';
  import type { MovieDetails } from '$lib/types';

  export let movie: MovieDetails;

  $: images = movie.images;
  $: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
</script>

<div class="hero">
  <div class="backdrop">
    <img src={media({ filePath: backdrop.file_path, width: 1280 })} alt={movie.title} use:smoothload />
  </div>

  <div class="info">
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
  </div>
</div>

<style>
  .backdrop img {
    width: 100%;
    display: block;
  }

  .backdrop::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 8rem;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top, black, transparent);
  }

  .info {
    display: flex;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    padding: var(--side);
    margin-top: -4rem;
    gap: 1rem;
  }

  .info h1,
  .info p {
    margin: 0;
  }

  .info p {
    max-width: 40ch;
  }

  @media (min-width: 80em) {
    .info {
      position: absolute;
      justify-content: center;
      top: 0;
      left: 0;
      width: 40em;
      height: 100%;
      grid-column: 1/2;
      margin: 0;
    }

    .backdrop {
      grid-column: 2/3;
    }

    .backdrop::after {
      width: 15rem;
      height: 100%;
      left: 100px;
      left: 0;
      bottom: 0;
      background: linear-gradient(to right, black, transparent);
    }
  }
</style>
