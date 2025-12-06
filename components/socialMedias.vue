<template>
  <div>
    <v-icon class="mr-2 hover" size="large" @click="openLinkedIn"
      >mdi-linkedin</v-icon
    >
    <v-icon class="mr-2 hover" size="large" @click="openGithub"
      >mdi-github</v-icon
    >
    <v-icon class="mr-2 hover" size="large" @click="mailTo">mdi-email</v-icon>

    <v-tooltip location="bottom" interactive>
      <template v-slot:activator="{ props }">
        <v-icon
          size="large"
          :class="{
            grey: spotifyStatus == null,
            pulsing: spotifyStatus != null,
          }"
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
            <v-img
              class="ml-4 hover"
              :width="64"
              :src="getSongImage"
              @click="openSong"
            ></v-img>
          </div>
        </div>
      </div>
      <div v-else>Currently not listening to anything</div>
    </v-tooltip>
  </div>
</template>

<script setup>
function mailTo() {
  window.location.href = "mailto:dominik@pawlowski.app";
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/dominik-p-45036a269/", "_blank");
}

function openGithub() {
  window.open("https://github.com/5e", "_blank");
}

const spotifyStatus = ref(null);
const songProgress = ref(0);

let timerInterval = null;

function smoothProgress() {
  timerInterval = setInterval(() => {
    spotifyStatus.value.progress_ms += 1000;
    songProgress.value =
      (spotifyStatus.value.progress_ms / spotifyStatus.value.item.duration_ms) *
      100;
  }, 1000);
}

async function getSpotifyStatus() {
  await $fetch("https://cloudflare-spotify.5egt.workers.dev/song", {
    async onResponse({ request, response, options }) {
      if (response.status != 204) {
        spotifyStatus.value = response._data;

        songProgress.value =
          (spotifyStatus.value.progress_ms /
            spotifyStatus.value.item.duration_ms) *
          100;

        if (!spotifyStatus.value.is_playing) {
          clearInterval(timerInterval);
          timerInterval = null;
          return;
        }

        if (timerInterval == null) {
          smoothProgress();
        }
      } else {
        spotifyStatus.value = null;
        clearInterval(timerInterval);
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
    image = "https://i.ibb.co/3J6LnGP/c656a7X.png";
  }
  return image;
});

function openSong() {
  window.open(spotifyStatus.value.item.external_urls.spotify, "_blank");
}

onMounted(() => {
  setInterval(() => {
    getSpotifyStatus();
  }, 5000);
  getSpotifyStatus();
});
</script>

<style scoped>
.hover {
  cursor: pointer;
  transition: color 0.2s;
  color: #9e9e9e;
}

.hover:hover {
  color: white;
}

.grey {
  color: #9e9e9e;
}

.pulsing {
  color: green;
  animation: pulse 3s infinite;
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
