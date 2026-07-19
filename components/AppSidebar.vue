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
    width: 100%;
    padding: 2rem 1.5rem 1.6rem;
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 860px) {
    .sidebar {
      position: sticky;
      top: 0;
      align-self: start;
      height: 100vh;
      padding: 3.2rem 0 2rem 1.5rem;
      max-width: none;
      margin: 0;
    }
  }

  .theme-btn-pos {
    align-self: flex-end;
    margin-bottom: 1.4rem;
  }
  @media (min-width: 860px) {
    .theme-btn-pos {
      margin-bottom: 2.2rem;
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
