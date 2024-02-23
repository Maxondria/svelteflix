<script lang="ts">
  import Results from '$lib/components/Results.svelte';
  import type { PageData } from './$types';
  import * as api from '$lib/api';
  import type { MovieList } from '$lib/types';

  export let data: PageData;

  let appending = false;

  const loadMore = async () => {
    if (!data.nextPage || appending) return;

    appending = true;

    const next = await api.get<MovieList>({
      fetch,
      endpoint: data.endpoint,
      params: { page: `${data.nextPage}` }
    });

    data.movies = [...data.movies, ...next.results];
    data.nextPage = next.page < next.total_pages ? next.page + 1 : null;
    appending = false;
  };
</script>

<div class="column">
  <h1>{data.title}</h1>
  <Results
    movies={data.movies}
    nextPage={data.nextPage ? `/movies/${data.view}?page=${data.nextPage}` : null}
    on:loadmore={loadMore}
  />
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
