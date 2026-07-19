<template>
  <aside class="sidebar">
    <ThemeToggle class="theme-btn-pos" />
    <h1>Dominik Pawlowski</h1>
    <div class="role">Full Stack Developer</div>
    <SideNav />
    <SocialLinks />
  </aside>
</template>

<style scoped>
  .sidebar {
    padding: 2.4rem 1.5rem 2rem;
    position: relative;
  }
  @media (min-width: 860px) {
    .sidebar {
      position: sticky;
      top: 0;
      align-self: start;
      height: 100vh;
      padding: 3.2rem 0 2rem 1.5rem;
      display: flex;
      flex-direction: column;
    }
  }

  .theme-btn-pos {
    position: absolute;
    top: 2.4rem;
    right: 1.5rem;
  }
  @media (min-width: 860px) {
    .theme-btn-pos {
      position: static;
      margin-bottom: 2.2rem;
      align-self: flex-end;
      margin-right: 1.5rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0;
  }
  .role {
    margin-top: 0.4rem;
    font-size: 0.88rem;
    color: var(--accent-soft);
  }
</style>
