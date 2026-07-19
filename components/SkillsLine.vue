<template>
  <p class="skills-line">
    <template v-for="(item, i) in items" :key="item.text">
      <span>{{ item.text }} <span class="yr mono">{{ years(item.yearStarted) }}y</span></span>
      <span v-if="i < items.length - 1" class="sep">·</span>
    </template>
  </p>
</template>

<script setup>
const items = [
  { text: "JavaScript", yearStarted: "2018-01-01" },
  { text: "SQL", yearStarted: "2018-09-09" },
  { text: "Vue.js", yearStarted: "2019-09-09" },
  { text: "Vuetify", yearStarted: "2019-09-09" },
  { text: "C#", yearStarted: "2019-09-09" },
  { text: "REST APIs", yearStarted: "2019-09-09" },
  { text: "Python", yearStarted: "2022-01-01" },
  { text: "MongoDB", yearStarted: "2024-06-24" },
  { text: "AWS", yearStarted: "2024-06-24" },
];

function years(input) {
  const start = new Date(input);
  const now = new Date();
  return now.getFullYear() - start.getFullYear();
}
</script>

<style scoped>
  .skills-line {
    font-size: 0.96rem;
    line-height: 2;
    color: var(--ink-soft);
    margin: 0;
  }
  .yr {
    color: var(--ink-faint);
    font-size: 0.78rem;
  }
  .sep {
    color: var(--rule);
    margin: 0 0.55em;
  }
</style>
