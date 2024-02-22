<script lang="ts">
  import { media } from '$lib/api';
  import type { MovieDetails } from '$lib/types';

  export let movie: MovieDetails;

  $: images = movie.images;
  $: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
  $: logo = images.logos.find((image) => image.iso_639_1 === 'en') || images.logos[0];
</script>

<div class="column">
  <a href="/movie/{movie.id}">
    <img
      class="backdrop"
      src={media({ filePath: backdrop.file_path, width: 1280 })}
      alt={movie.title}
      style="aspect-ratio: {backdrop.aspect_ratio}"
    />

    <img
      class="logo"
      src={media({ filePath: logo.file_path, width: 1280 })}
      alt={movie.title}
      style="aspect-ratio: {logo.aspect_ratio}"
    />
  </a>
</div>

<style>
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .backdrop {
    width: 100%;
  }

  .logo {
    position: absolute;
    width: 30%;
    height: 100%;
    left: 1rem;
    bottom: 0;
    object-fit: contain;
    object-position: 50% 75%;
    filter: drop-shadow(0 0 3rem black) drop-shadow(0 0 0.5rem black);
  }
</style>
