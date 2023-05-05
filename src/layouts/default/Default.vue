<template>
  <v-app class="waves">
    <v-container class="fill-height">
      <v-row no-gutters class="justify-center">
        <v-col v-if="width >= 960" xs="1" sm="1" md="3" lg="3" xl="4" xxl="4">
          <desktop-nav />
        </v-col>
        <v-col xs="10" sm="10" md="6" lg="6" xl="4" xxl="3">
          <default-view />
        </v-col>
      </v-row>
    </v-container>
    <mobile-nav v-if="width <= 959" />
  </v-app>
</template>

<script>
import DesktopNav from "./DesktopNav.vue";
import DefaultView from "./View.vue";
import MobileNav from "./MobileNav.vue";

export default {
  data() {
    return {
    };
  },
  computed: {
    width() {
      return this.$vuetify.display.width
    }
  },
  mounted() {
  },
  components: {
    DesktopNav,
    DefaultView,
    MobileNav
  }
}
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
