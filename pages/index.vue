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
      <h4>Projects</h4>
      <h4>
        <a class="text-grey" href="https://5e.github.io/vue-light-validator/#/"
          >vue-light-validator</a
        >
      </h4>
      <div class="text-grey">
        Light Vue 3 directive for easy form validation using no dependencies
      </div>

      <h4>
        <a
          class="text-grey"
          href="https://github.com/5e/streamdeck-hwinfo-plugin"
          >streamdeck-hwinfo-plugin</a
        >
      </h4>
      <div class="text-grey">
        A plugin for the Stream Deck which displays hardware information. It has
        been downloaded <span v-html="downloads"></span> times.
      </div>

      <h4>
        <a class="text-grey" href="https://github.com/5e/connected-drive-alerts"
          >connected-drive-alerts</a
        >
      </h4>
      <div class="text-grey">
        Adding vehicle notifications to the BMW Connected Drive app
      </div>

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

      <h4>
        <a class="text-grey" href="https://github.com/5e/personal-website"
          >personal-website</a
        >
      </h4>
      <div class="text-grey">
        The website you're reading now, it's open source
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloads: "&nbsp;&nbsp;&nbsp;",
    };
  },

  mounted() {
    $fetch("https://mp-gateway.elgato.com/products?name=HWiNFO%20Reader")
      .then((response) => {
        let downloads = response.results[0].download_count;
        this.downloads = 0;
        setInterval(() => {
          if (this.downloads < downloads) {
            this.downloads += 1;
          }
        }, 10);
      })
      .catch((error) => {
        console.error(error);
        this.downloads = 200;
      });
  },
};
</script>
