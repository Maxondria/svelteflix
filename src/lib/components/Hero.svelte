<script lang="ts">
  import { media } from '$lib/api';
  import type { MovieDetails } from '$lib/types';

  export let movie: MovieDetails;

  $: images = movie.images;
  $: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
  $: logo = images.logos.find((image) => image.iso_639_1 === 'en') || images.logos[0];
</script>

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

<style>
  a {
    display: flex;
  }

  .backdrop {
    width: 100%;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 1rem black);
  }
</style>
