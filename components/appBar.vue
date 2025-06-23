<template>
  <div class="d-flex justify-center neumorphic mt-5 mb-5">
    <div style="width: 100%">
      <NuxtLink to="/">
        <v-btn
          size="large"
          :class="{
            'elevation-0': true,
            transparent: true,
            'text-green': $route.fullPath == '/',
          }"
          icon="mdi-home-outline"
        ></v-btn>
      </NuxtLink>
      <NuxtLink to="/experience">
        <v-btn
          size="large"
          :class="{
            'elevation-0': true,
            transparent: true,
            'text-green': $route.fullPath == '/experience',
          }"
          icon="mdi-briefcase-outline"
        ></v-btn>
      </NuxtLink>
      <NuxtLink to="/education">
        <v-btn
          size="large"
          :class="{
            'elevation-0': true,
            transparent: true,
            'text-green': $route.fullPath == '/education',
          }"
          icon="mdi-school-outline"
        ></v-btn>
      </NuxtLink>
      <NuxtLink to="/blog">
        <v-btn
          size="large"
          :class="{
            'elevation-0': true,
            transparent: true,
            'text-green': $route.fullPath.includes('/blog'),
          }"
          icon="mdi-post-outline"
        >
        </v-btn>
      </NuxtLink>
      <v-tooltip location="bottom" content-class="tooltip">
        <template v-slot:activator="{ props }">
          <v-icon
            size="large"
            style="top: 13px; right: 15px"
            :class="{ 'float-right': true, pulsing: spotifyStatus != null }"
            icon="mdi-spotify"
            v-bind="props"
          ></v-icon>
        </template>
        <div v-if="spotifyStatus != null">
          <div :key="spotifyStatus.item.uri">
            <div class="d-inline-flex">
              <div class="mt-2" style="min-width: 150px">
                <div>
                  Listening to:
                  <br />
                  {{ allArtists }} - {{ spotifyStatus.item.name }}
                </div>
                <div class="mt-1">
                  <v-progress-linear
                    rounded
                    :model-value="songProgress"
                  ></v-progress-linear>
                  <div>
                    <div class="d-inline-flex">
                      {{ Math.floor(spotifyStatus.progress_ms / 1000 / 60) }}:{{
                        Math.floor((spotifyStatus.progress_ms / 1000) % 60)
                          .toString()
                          .padStart(2, "0")
                      }}
                    </div>
                    <div class="d-inline-flex float-right">
                      {{
                        Math.floor(spotifyStatus.item.duration_ms / 1000 / 60)
                      }}:{{
                        Math.floor((spotifyStatus.item.duration_ms / 1000) % 60)
                          .toString()
                          .padStart(2, "0")
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <v-img class="ml-4" :width="64" :src="getSongImage"></v-img>
            </div>
          </div>
        </div>
        <div v-else>Currently not listening to anything :(</div>
      </v-tooltip>
    </div>
  </div>
</template>

<script setup>
const spotifyStatus = ref(null);

async function getSpotifyStatus() {
  await $fetch("https://cloudflare-spotify.5egt.workers.dev/song", {
    async onResponse({ request, response, options }) {
      if (response.status != 204) {
        spotifyStatus.value = response._data;
      } else {
        spotifyStatus.value = null;
      }
    },
  });
}

const allArtists = computed(() => {
  let total = "";
  spotifyStatus.value.item.artists.forEach((artist) => {
    total += artist.name;
    total += ", ";
  });
  total = total.slice(0, -2);
  return total;
});

const getSongImage = computed(() => {
  //if song is a custom imported song it will not have an image
  let image = spotifyStatus.value.item.album.images[1]?.url;
  if (image == null || image == undefined) {
    image = "https://i.imgur.com/c656a7X.png";
  }
  return image;
});

const songProgress = computed(() => {
  return (
    (spotifyStatus.value.progress_ms / spotifyStatus.value.item.duration_ms) *
    100
  );
});

onMounted(() => {
  setInterval(() => {
    getSpotifyStatus();
  }, 5000);
  getSpotifyStatus();
});
</script>

<style scoped>
.pulsing {
  color: green;
  animation: pulse 3s infinite;
}

.transparent {
  background-color: transparent;
}

.neumorphic {
  border-radius: 19px;
  background: #121212;
  box-shadow: 7px 7px 14px #070707, -7px -7px 14px #1d1d1d;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.25);
  }

  20% {
    transform: scale(1);
  }

  80% {
    transform: scale(1);
  }

  90% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
