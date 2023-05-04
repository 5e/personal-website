<template>
  <v-main>
    <router-view v-slot="{ Component }">
      <v-fade-transition mode="out-in">
        <component :is="Component"></component>
      </v-fade-transition>
    </router-view>
  </v-main>
</template>

<script setup>
  //
</script>
