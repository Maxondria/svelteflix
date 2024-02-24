<script>
  import '../styles.css';
  import * as api from '$lib/api';

  import logo from '$lib/images/logo.svg';
  import tmdb from '$lib/images/tmdb.svg';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <link rel="preconnect" href={api.baseURL} />
  <title>{$page.data.title ?? 'SvelteFlix'}</title>
  <meta name="description" content="Discover today's top movies" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SvelteFlix" />
  <meta name="twitter:description" content="Discover today's top movies" />
</svelte:head>

<nav>
  <a class="logo" href="/">
    <img class="logo" alt="SvelteFlix" src={logo} />
  </a>

  <div class="links">
    <a href="/search">Search</a>
    <a href="/watchlist">Watchlist</a>
    <a href="/login">Log in</a>
  </div>
</nav>

<main class:infinite={$page.data.infinite}>
  <slot />
</main>

<footer>
  <p>
    Data provided by <a href="https://developer.themoviedb.org/docs/getting-started">
      <img src={tmdb} alt="The Movie DB" />
    </a>
  </p>
</footer>

<style>
  nav,
  footer {
    padding: 1rem var(--side);
    margin: 0 auto;
  }

  nav {
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    justify-content: space-between;
    color: var(--accent);
    max-width: var(--column);
  }

  footer {
    display: flex;
    height: 5rem;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  .links {
    display: flex;
    align-items: center;
  }

  main.infinite {
    height: 0;
    flex: 1;
    overflow: hidden;
  }

  .links {
    display: flex;
    gap: 1em;
  }

  .logo {
    height: 100%;
  }
</style>
