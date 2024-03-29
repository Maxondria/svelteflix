<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import type { PageData } from './$types';
  import Hero from './_components/Hero.svelte';

  export let data: PageData;
</script>

<Hero movie={data.movie} />
<div class="column grid">
  {#if data.trailer}
    <iframe
      src="https://www.youtube.com/embed/{data.trailer.key}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  {/if}

  <dl class="data">
    <dt>Released</dt>
    <dd>{data.movie.release_date}</dd>

    <dt>Runtime</dt>
    <dd>{data.movie.runtime} minutes</dd>

    <dt>Budget</dt>
    <dd>${Math.round(data.movie.budget / 1e6)}M</dd>

    <dt>Revenue</dt>
    <dd>${Math.round(data.movie.revenue / 1e6)}M</dd>

    <dt>Genre</dt>
    <dd class="genres">{data.movie.genres?.map((g) => g.name).join(', ')}</dd>
  </dl>
</div>

{#if data.movie.recommendations.results.length > 0}
  <Carousel title="You might also like..." movies={data.movie.recommendations.results} />
{/if}

<style>
  .grid {
    display: grid;
    max-width: var(--column);
    margin: 2em auto;
    gap: 2em;
  }

  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  .data {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1em;
  }

  dt,
  dd {
    line-height: 1;
  }

  dt {
    text-transform: uppercase;
    font-size: 0.8rem;
    top: 0.2rem;
    opacity: 0.8;
  }

  dd {
    margin: 0;
  }

  .genres {
    grid-column: 2/5;
  }

  @media (min-width: 45em) {
    .data {
      display: grid;
      grid-template-columns: max-content 1fr max-content 1fr;
      gap: 1em;
    }
  }

  @media (min-width: 60em) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .data {
      height: 0;
    }
  }
</style>
