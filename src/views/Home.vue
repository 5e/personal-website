<template>
  <v-container>
    <v-responsive>
      <v-row>
        <v-col lg="12" xl="12" md="12" sm="12" xs="12">
          <v-card
            class="elevation-0"
            style="margin: auto"
            rounded="xl"
            max-width="500px"
          >
            <v-card-item>
              <div class="d-flex">
                <div>
                  <v-avatar size="90" class="elevation-5">
                    <v-img src="../assets/image1.png"></v-img>
                  </v-avatar>
                </div>
                <div class="align-self-center">
                  <span style="font-size: 1.25rem; font-weight: 500"
                    >Dominik Pawlowski</span
                  >
                  <v-card-subtitle class="pb-0"
                    >Full-stack Developer</v-card-subtitle
                  >
                  <v-card-subtitle>dominik@pawlowski.app</v-card-subtitle>
                </div>
              </div>
              <v-card-subtitle class="d-flex pa-0 pt-1">
                <v-scroll-y-transition mode="out-in">
                  <div v-if="spotifyStatus != null">
                    <v-icon
                      style="color: #1db954"
                      icon="mdi-spotify"
                      size="21px"
                    ></v-icon>
                  </div>
                </v-scroll-y-transition>
                <v-scroll-y-transition mode="out-in">
                  <div
                    style="
                      font-size: 0.875rem;
                      margin-top: 1px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
                    class="ml-1"
                    :key="spotifyStatus.item.uri"
                    v-if="spotifyStatus != null"
                  >
                    Listening to
                    {{ spotifyStatus.item.name }}
                    by {{ allArtists }}
                  </div>
                </v-scroll-y-transition>
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="pb-0">
              <v-sheet
                v-for="item in items"
                class="d-inline-flex pa-1 mr-1"
                rounded="xl"
                color="grey-darken-3"
              >
                <v-icon :icon="item.icon" size="large"></v-icon>
              </v-sheet>
            </v-card-text>
            <v-card-actions>
              <v-btn
                append-icon="mdi-link"
                target="_blank"
                href="https://www.linkedin.com/in/dominik-p-45036a269/"
                >LinkedIn</v-btn
              >
              <v-btn
                append-icon="mdi-link"
                target="_blank"
                href="https://www.github.com/5e"
                >GitHub</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      spotifyStatus: null,
      items: [
        {
          text: "Vue.js",
          icon: "fa:fas fa-brands fa-vuejs",
          description: "4 years",
        },
        {
          text: "Vuetify",
          icon: "mdi-vuetify",
          description: "4 years",
        },
        {
          text: "C#",
          icon: "mdi-dot-net",
          description: "4 years",
        },
        {
          text: "SQL",
          icon: "mdi-database-search",
          description: "5 years",
        },
        {
          text: "REST APIs",
          icon: "mdi-cloud-braces",
          description: "4 years",
        },
        {
          text: "Python",
          icon: "mdi-language-python",
          description: "2 years",
        },
        {
          text: "JavaScript",
          icon: "fa:fas fa-brands fa-square-js",
          description: "5 years",
        },
      ],
    };
  },
  computed: {
    allArtists() {
      var total = "";
      this.spotifyStatus.item.artists.forEach((artist) => {
        total += artist.name;
        total += ", ";
      });
      total = total.slice(0, -2);
      return total;
    },
  },
  methods: {
    getSpotifyStatus() {
      this.recipesLoading = true;
      axios
        .get("https://cloudflare-spotify.5egt.workers.dev/song")
        .then((response) => {
          if (response.status != 204) {
            this.spotifyStatus = response.data;
          } else {
            this.spotifyStatus = null;
          }
        });
    },
  },
  mounted() {
    this.getSpotifyStatus();

    const timer = setInterval(() => {
      this.getSpotifyStatus();
    }, 5000);
  },
};
</script>

<style scoped></style>
