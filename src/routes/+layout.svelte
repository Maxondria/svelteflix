<script>
  import '../styles.css';

  import logo from '$lib/images/logo.svg';
  import tmdb from '$lib/images/tmdb.svg';
  import { page } from '$app/stores';
</script>

<nav>
  <a href="/">
    <img src={logo} alt="SvelteFlix" />
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
  main.infinite {
    height: 0;
    flex: 1;
    overflow: hidden;
  }
  nav {
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: space-between;
    align-items: center;
    max-width: var(--column);
    padding: 0 var(--side);
    color: var(--accent);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 1rem;
  }

  .links {
    display: flex;
    gap: 1em;
  }

  footer {
    display: flex;
    justify-content: center;
    height: 5rem;
  }
</style>
