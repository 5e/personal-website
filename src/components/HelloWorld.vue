<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center fill-height">
      <v-row class="d-flex justify-center">
        <v-col lg="6" xl="3" md="7" sm="8" xs="6">
          <v-card class="elevation-5">
            <v-card-item class="text-center">
              <v-card-title>
                <div>
                  <v-avatar size="90" class="elevation-2">
                    <v-img
                      :width="100"
                      aspect-ratio="16/9"
                      src="../assets/image1.png"
                    ></v-img>
                  </v-avatar>
                </div>
                Dominik Pawlowski
              </v-card-title>

              <v-card-subtitle>Full-stack Developer</v-card-subtitle>
            </v-card-item>

            <v-card-text class="pb-0">
              <div><b>Employment</b></div>
              Welsh Revenue Authority <i>(2019 - present)</i><br />
              End-to-end development on in-house solutions consisting of
              designing, building and implementing web applications to reduce
              reliance on third party suppliers.
            </v-card-text>
            <v-card-text class="pb-0">
              <div><b>Education</b></div>
              University of South Wales <i>(2019 - 2024)</i><br />
              BSc (Hons) in Digital and Technology Solutions
              <div class="mb-2"></div>
              Coleg Gwent <i>(2016 - 2019)</i><br />
              A-Levels in Maths, Further Maths, Computer Science
            </v-card-text>
            <v-card-text class="pb-0">
              <div><b>Experience</b></div>
              <v-row>
                <v-col cols="12">
                  4 years of experience working in an agile/scrum environment
                  building full stack applications using Vue.js, C# and
                  Microsoft SQL Server. Experience in using cloud platforms such
                  as Amazon AWS, Microsoft Azure and recently Cloudflare Workers
                  to create serverless functions. In addition to this,
                  experience in Python from personal side-projects.
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text>
              <div><b>Skills</b></div>
              <v-row>
                <v-col
                  cols="6"
                  class="pb-0"
                  v-for="item in items"
                  :key="item.text"
                >
                  <v-sheet
                    rounded
                    class="d-flex px-3 py-2"
                    color="grey-lighten-3"
                  >
                    <span
                      >{{ item.text }}
                      <br />
                      <span style="font-size: 0.75rem">
                        {{ item.description }}
                      </span>
                    </span>
                    <v-spacer></v-spacer>
                    <div class="align-self-center">
                      <v-icon :icon="item.icon"></v-icon>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-scroll-y-transition mode="out-in">
                <div class="mr-2" v-if="spotifyStatus != null">
                  <v-icon style="color: #1db954" icon="mdi-spotify"></v-icon>
                </div>
              </v-scroll-y-transition>
              <v-scroll-y-transition mode="out-in">
                <span
                  style="
                    line-height: 18px;
                    font-size: 0.875rem;
                    font-weight: 400;
                  "
                  v-if="spotifyStatus != null"
                  :key="spotifyStatus.item.uri"
                  >{{ spotifyStatus.item.name }}
                  <br />
                  <span style="font-size: 0.75rem; font-weight: 400">{{
                    allArtists
                  }}</span>
                </span>
              </v-scroll-y-transition>
              <v-spacer></v-spacer>
              <v-btn
                target="_blank"
                href="https://www.linkedin.com/in/dominik-p-45036a269/"
                >LinkedIn</v-btn
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
