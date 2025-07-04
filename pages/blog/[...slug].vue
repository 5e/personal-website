<template>
  <div>
    <article>
      <h1 :key="doc.id">{{ doc.header }}</h1>
      <div class="mb-3">
        <p class="text-grey">{{ doc.createdAt }}</p>
      </div>
      <ContentRenderer :value="doc" />
    </article>
  </div>
</template>

<script setup>
const views = ref(0);
const { path } = useRoute();
const doc = await queryContent(path).findOne();
</script>
