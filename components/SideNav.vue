<template>
  <nav class="side-nav">
    <a
      v-for="item in items"
      :key="item.id"
      :href="`#${item.id}`"
      :class="{ 'is-active': active === item.id }"
      >{{ item.label }}</a
    >
  </nav>
</template>

<script setup>
const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const active = ref("about");

function setActive() {
  const trigger = window.innerHeight * 0.35;
  let current = items[0].id;
  for (const item of items) {
    const el = document.getElementById(item.id);
    if (el && el.getBoundingClientRect().top <= trigger) current = item.id;
  }
  active.value = current;
}

onMounted(() => {
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
});
onUnmounted(() => {
  window.removeEventListener("scroll", setActive);
});
</script>

<style scoped>
  .side-nav {
    margin-top: 2.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }
  .side-nav a {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-faint);
    padding: 0.15rem 0;
    border-left: 2px solid transparent;
    padding-left: 0.7rem;
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .side-nav a:hover,
  .side-nav a.is-active {
    color: var(--ink);
    border-color: var(--accent);
  }
</style>
