<script lang="ts">
  import { media } from '$lib/api';
  import type { MovieListResult } from '$lib/types';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  export let movies: MovieListResult[];
  export let nextPage: string | null;

  let viewport: HTMLDivElement;
  let results: HTMLDivElement;

  let itemWidth: number;
  let itemHeight: number;
  let numColumns: number = 4;

  let idxFirstVisible: number = 0;
  let idxLastVisible: number = movies.length;
  let paddingTop: number = 0;
  let paddingBottom: number = 0;

  const handleResize = () => {
    const first = results.firstChild as HTMLAnchorElement;
    itemWidth = first.offsetWidth;
    itemHeight = first.offsetHeight;
    numColumns = 4;
    handleScroll();
  };

  const handleScroll = () => {
    const remainingSpace = viewport.scrollHeight - (viewport.scrollTop + viewport.clientHeight);

    if (remainingSpace < 400) {
      dispatch('loadmore');
    }

    idxFirstVisible = Math.floor(viewport.scrollTop / itemHeight) * numColumns;
    idxLastVisible = Math.ceil((viewport.scrollTop + viewport.clientHeight) / itemHeight) * numColumns;

    paddingTop = Math.floor(idxFirstVisible / numColumns) * itemHeight;
    paddingBottom = Math.floor((movies.length - idxLastVisible) / numColumns) * itemHeight;
  };

  onMount(handleResize);
</script>

<svelte:window on:resize={handleResize} />

<div class="viewport" bind:this={viewport} on:scroll={handleScroll}>
  <div class="results" bind:this={results} style="padding-top: {paddingTop}px; padding-bottom: {paddingBottom}px;">
    {#each movies.slice(idxFirstVisible, idxLastVisible) as movie, i (movie.poster_path + i)}
      <a href="/movies/{movie.id}">
        <img src={media({ filePath: movie.poster_path, width: 500 })} alt={movie.title} />
      </a>
    {/each}
  </div>

  {#if nextPage}
    <a href={nextPage}>Next page</a>
  {/if}
</div>

<style>
  .viewport {
    overflow-y: auto;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }

  a {
    width: 100%;
    height: auto;
    padding: 0.5rem;
    aspect-ratio: 2/3;
  }

  img {
    width: 100%;
  }
</style>
