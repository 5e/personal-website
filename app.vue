<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ThemeToggle class="global-toggle" />
</template>

<style>
  .global-toggle {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 50;
    background: var(--bg);
  }

  :root {
    --bg: #faf9f6;
    --surface: #f1efe9;
    --ink: #1c1c1a;
    --ink-soft: #63615a;
    --ink-faint: #9d9b91;
    --accent: #3f6659;
    --accent-soft: #5c8577;
    --rule: #e3e0d5;
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #131413;
      --surface: #1a1b19;
      --ink: #eceae4;
      --ink-soft: #a3a199;
      --ink-faint: #6a6862;
      --accent: #7fada0;
      --accent-soft: #6b9689;
      --rule: #282925;
      color-scheme: dark;
    }
  }
  :root[data-theme="light"] {
    --bg: #faf9f6;
    --surface: #f1efe9;
    --ink: #1c1c1a;
    --ink-soft: #63615a;
    --ink-faint: #9d9b91;
    --accent: #3f6659;
    --accent-soft: #5c8577;
    --rule: #e3e0d5;
    color-scheme: light;
  }
  :root[data-theme="dark"] {
    --bg: #131413;
    --surface: #1a1b19;
    --ink: #eceae4;
    --ink-soft: #a3a199;
    --ink-faint: #6a6862;
    --accent: #7fada0;
    --accent-soft: #6b9689;
    --rule: #282925;
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background: var(--bg);
    color: var(--ink);
    font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    transition: background 0.25s ease, color 0.25s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    body {
      scroll-behavior: auto;
    }
  }

  a {
    color: var(--ink);
    text-decoration: none;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 2px;
  }
  ::selection {
    background: var(--accent);
    color: var(--bg);
  }

  .mono {
    font-family: ui-monospace, "Cascadia Mono", "SF Mono", Consolas, monospace;
    font-variant-numeric: tabular-nums;
  }

  /* scroll-reveal, applied via the v-reveal directive */
  .reveal {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .reveal.in {
    opacity: 1;
    transform: translateY(0);
  }
</style>
