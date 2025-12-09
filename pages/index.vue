<template>
  <div class="bg-color">
    <div id="cursor-gradient"></div>
    <v-row
      no-gutters
      class="mt-16 mx-8 mx-md-0"
      style="position: relative; z-index: 1"
      v-if="mounted"
    >
      <v-col cols="12" md="4" offset-md="1">
        <div :class="{ 'fixed-left-col': mdAndUp === true }">
          <left-side />
          <desktop-menu class="mt-12" v-if="mdAndUp === true" />

          <social-medias class="mt-6 mt-md-12" />
        </div>
      </v-col>

      <v-col cols="12" md="5" class="mt-6 mt-md-0">
        <right-side />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { onMounted, onUnmounted, ref } from "vue";
const { mdAndUp } = useDisplay();
// Need to wait for mounted to use mdAndUp correctly, otherwise on first load it is always false
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
  const gradient = document.getElementById("cursor-gradient");
  function moveGradient(e) {
    const size = 600;
    gradient.style.left = `${e.clientX - size / 2}px`;
    gradient.style.top = `${e.clientY - size / 2}px`;
  }
  window.addEventListener("mousemove", moveGradient);
  onUnmounted(() => {
    window.removeEventListener("mousemove", moveGradient);
  });
});
</script>

<style scoped>
.bg-color {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0f2027,
    #203a43,
    #2c5364
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0f2027,
    #203a43,
    #2c5364
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.fixed-left-col {
  position: sticky;
  top: 68px;
  padding-right: 20px;
}
#cursor-gradient {
  position: fixed;
  left: 0;
  top: 0;
  width: 600px;
  height: 600px;
  pointer-events: none;
  z-index: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(107, 135, 147, 0.1) 0%,
    rgba(107, 135, 147, 0.1) 20%,
    transparent 60%,
    transparent 100%
  );
}
</style>
