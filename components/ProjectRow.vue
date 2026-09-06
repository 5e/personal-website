<template>
  <div class="proj" ref="rowEl">
    <a class="name" :href="href" target="_blank" rel="noopener"
      >{{ name }}<span class="arrow">↗</span></a
    >
    <p>
      {{ description }}
      <template v-if="count !== null">
        {{ countPrefix }} <span class="count mono">{{ formattedCount }}+</span>
        {{ countSuffix }}
      </template>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  href: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: Number, default: null },
  countPrefix: { type: String, default: "" },
  countSuffix: { type: String, default: "" },
});

const displayCount = ref(0);
const rowEl = ref(null);
const hasEntered = ref(false);
let rafId = null;
let observer = null;

function animateTo(target) {
  const start = displayCount.value;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion || start === target) {
    displayCount.value = target;
    return;
  }
  const duration = 2200;
  const startTime = performance.now();
  cancelAnimationFrame(rafId);

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    displayCount.value = Math.round(start + (target - start) * eased);
    if (progress < 1) rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);
}

watch(
  [() => props.count, hasEntered],
  ([count, entered]) => {
    if (count !== null && entered) animateTo(count);
  },
  { immediate: true },
);

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hasEntered.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  if (rowEl.value) observer.observe(rowEl.value);
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  observer?.disconnect();
});

const formattedCount = computed(() =>
  displayCount.value.toLocaleString("en-GB"),
);
</script>

<style scoped>
.proj {
  display: flex;
  justify-content: space-between;
  gap: 1.4rem;
  padding: 1.05rem 0;
  border-top: 1px solid var(--rule);
  align-items: baseline;
  flex-wrap: wrap;
}
.name {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--ink);
}
.name:hover {
  color: var(--accent);
}
.arrow {
  display: inline-block;
  transition: transform 0.18s ease;
  margin-left: 0.15em;
  color: var(--ink-faint);
}
.name:hover .arrow {
  transform: translate(2px, -2px);
  color: var(--accent);
}
p {
  margin: 0;
  font-size: 0.84rem;
  color: var(--ink-faint);
  max-width: 22em;
  line-height: 1.55;
}
.count {
  color: var(--ink-soft);
  font-weight: 600;
}
@media (max-width: 560px) {
  .proj {
    flex-direction: column;
  }
  p {
    max-width: none;
  }
}
</style>
