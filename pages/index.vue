<template>
  <div>
    <div class="d-flex">
      <div class="align-self-center">
        <p style="font-size: 1.25rem">Dominik Pawlowski</p>
        <p class="text-grey">
          Full-stack Developer <br />
          dominik@pawlowski.app
        </p>
      </div>
      <!-- <div>
        <v-avatar size="90">
          <v-img src="/me.png"></v-img>
        </v-avatar>
      </div> -->
    </div>
    <div class="mt-2">
      Find me on
      <a class="text-white" target="_blank" href="https://www.github.com/5e">
        GitHub
      </a>
      and
      <a
        class="text-white"
        target="_blank"
        href="https://www.linkedin.com/in/dominik-pawlowski-45036a269"
      >
        LinkedIn
      </a>
    </div>
    <div class="mt-10">
      <div>
        👋 Hello, I'm Dom, a passionate full-stack developer with a love for
        crafting innovative solutions across the development spectrum. With a
        foundation in computer science and a love for problem-solving, I thrive
        in creating new things.
      </div>
    </div>

    <div class="mt-10">
      <h4 class="mb-2">Projects</h4>

      <ProjectsStreamDeck />

      <ProjectsConnectedDriveAlerts />

      <ProjectsVueLightValidator />

      <div class="bg-grey-darken-4 rounded-lg pl-3 py-3 mt-3">
        <h4>
          <a
            class="text-grey"
            href="https://addons.mozilla.org/en-GB/firefox/addon/shorts-redirector/"
            >shorts-redirector</a
          >
        </h4>
        <div class="text-grey">
          Firefox extension to convert YouTube Shorts into normal videos
        </div>
      </div>

      <div class="bg-grey-darken-4 rounded-lg pl-3 py-3 mt-3">
        <h4>
          <a class="text-grey" href="https://github.com/5e/personal-website"
            >personal-website</a
          >
        </h4>
        <div class="text-grey">
          The website you're reading now, it's open source
        </div>
      </div>

      <div style="height: 200px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
