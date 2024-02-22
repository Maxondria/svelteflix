<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';

  export let data;
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />
