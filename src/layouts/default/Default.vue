<template>
  <v-app class="waves">
    <!-- <default-bar /> -->

    <default-view />
  </v-app>
</template>

<script setup>
// import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>

<style scoped>
.waves {
  /* background-color: #fa7268; */
  background-color: salmon;
  background-image: url("../../assets/layered-waves-haikei.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
