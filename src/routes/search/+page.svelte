<script lang="ts">
  import Results from '$lib/components/Results.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="column">
  <h1>Search</h1>

  <form>
    <input type="text" name="query" value={data.query} autocomplete="off" spellcheck="false" />
  </form>

  {#if data.query}
    <Results movies={data.movies} nextPage={null} />
  {/if}
</div>

<style>
  input {
    font-family: inherit;
    font-size: 2em;
    padding: 0.5em;
    width: 100%;
    background: rgb(255, 255, 255, 0.1);
    border: none;
    border-radius: 0.5em;
    color: white;
  }

  input:focus-visible {
    outline: 2px solid var(--accent);
  }
</style>
