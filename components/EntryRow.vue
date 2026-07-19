<template>
  <div class="entry">
    <div class="entry-top">
      <h3>
        <a v-if="headingHref" class="entry-link" :href="headingHref" target="_blank" rel="noopener">{{ heading }}</a>
        <template v-else>{{ heading }}</template>
      </h3>
      <span v-if="period" class="period mono">{{ period }}</span>
    </div>
    <div v-if="org" class="org">
      <a v-if="orgHref" class="link" :href="orgHref" target="_blank" rel="noopener">{{ org }}</a>
      <template v-else>{{ org }}</template>
    </div>
    <p v-if="description" class="desc">{{ description }}</p>
    <div v-if="tags && tags.length" class="stack">{{ tags.join(" · ") }}</div>
  </div>
</template>

<script setup>
defineProps({
  heading: { type: String, required: true },
  headingHref: { type: String, default: "" },
  period: { type: String, default: "" },
  org: { type: String, default: "" },
  orgHref: { type: String, default: "" },
  description: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
});
</script>

<style scoped>
  .entry {
    padding: 1.3rem 0;
    border-top: 1px solid var(--rule);
  }
  .entry-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }
  h3 {
    margin: 0;
    font-size: 1.02rem;
    font-weight: 600;
    letter-spacing: -0.005em;
  }
  .entry-link {
    border-bottom: 1px solid var(--rule);
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .entry-link:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
  .period {
    font-size: 0.78rem;
    color: var(--ink-faint);
    white-space: nowrap;
  }
  .org {
    margin-top: 0.25rem;
    font-size: 0.88rem;
    color: var(--ink-soft);
  }
  .org .link {
    color: var(--ink-soft);
    border-bottom: 1px solid var(--rule);
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .org .link:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
  .desc {
    margin: 0.65rem 0 0;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--ink-soft);
    max-width: 32em;
  }
  .stack {
    margin-top: 0.6rem;
    font-size: 0.78rem;
    color: var(--ink-faint);
  }
</style>
