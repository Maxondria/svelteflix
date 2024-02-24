<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>SvelteFlix</title>
</svelte:head>

<h1 class="column">Top trending movies</h1>
<Hero movie={data.featured} />
<Carousel movies={data.trending.results} href="/movies/trending" title="Trending" />
<Carousel movies={data.nowPlaying.results} href="/movies/now-playing" title="Now playing" />
<Carousel movies={data.upComing.results} href="/movies/upcoming" title="Upcoming" />
