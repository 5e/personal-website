<template>
  <v-app class="waves">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="2" offset="1">
          <default-bar />
        </v-col>
        <v-col cols="7">
          <default-view />
        </v-col>
        <v-col cols="2">
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>

<style scoped>
.waves {
  /* background-color: #fa7268; */
  /* background-color: salmon; */
  background-image: url("../../assets/waveshaikei.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
