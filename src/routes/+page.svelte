<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import { views } from '$lib/views.js';

  export let data;
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />
<Carousel movies={data.trending.results} view={views.trending} href="/movies/trending" />
<Carousel movies={data.nowPlaying.results} view={views.nowPlaying} href="/movies/now-playing" />
<Carousel movies={data.upComing.results} view={views.upComing} href="/movies/upcoming" />
