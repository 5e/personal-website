<template>
  <div>
    <div v-if="$route.fullPath == '/blog' || $route.fullPath == '/blog/'">
      <h3 class="mb-3">Blog</h3>
      <ContentList path="/blog" v-slot="{ list }">
        <div
          class="article mb-3"
          v-for="article in sortByDate(list)"
          :key="article._path"
          @click="$router.push(article._path)"
        >
          <div class="d-flex">
            <div class="mr-auto">
              {{ article.header }}
            </div>
            <div>
              <div class="text-grey">{{ article.createdAt }}</div>
            </div>
          </div>
          <p class="text-grey">{{ article.description }}</p>
        </div>
      </ContentList>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
function sortByDate(array) {
  //sort array by createdAt value
  let copy = JSON.parse(JSON.stringify(array));
  copy.sort((a, b) => b.id - a.id);
  return copy;
}
</script>

<style scoped>
.article {
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
}
.article:hover {
  cursor: pointer;
  background-color: #1b1b1b;
  transition: background-color 0.2s ease-in-out;
}
</style>
