<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center fill-height">
      <!-- <v-img contain height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" /> -->



      <v-row class="d-flex  justify-center">
        <v-col lg="6" xl="3" md="7" sm="8" xs="6">
          <v-card class="elevation-5">
            <v-card-item class="text-center">
              <v-card-title>
                <div>
                  <v-avatar size="90" class="elevation-2">
                    <v-img :width="100" aspect-ratio="16/9" src="../assets/image1.png"></v-img>
                  </v-avatar>
                </div>
                Dominik Pawlowski
              </v-card-title>

              <v-card-subtitle>Full-stack Developer</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <div><b>Employment</b></div>
              Welsh Revenue Authority <i>(2019 - present)</i><br>
              End-to-end development on in-house solutions consisting of designing, building and implementing web
              applications
              to
              reduce reliance on third party suppliers.
            </v-card-text>
            <v-card-text>
              <div><b>Education</b></div>
              University of South Wales <i>(2019 - 2024)</i><br>
              BSc (Hons) in Digital and Technology Solutions
            </v-card-text>
            <v-card-text>
              <div><b>Skills</b></div>
              <v-row>
                <v-col cols="6">
                  4 years of experience building full stack applications using Vue.js, C# and Microsoft SQL
                  Server
                  <br><br>Experience in Python in numerous side projects
                </v-col>
                <v-col cols="6" class="pt-0">
                  <v-list density="compact" class="pt-0">
                    <v-list-item v-for="item in items" :key="item.text" :title="item.text"
                      :append-avatar="item.icon"></v-list-item>
                  </v-list>
                </v-col>
              </v-row>


            </v-card-text>
            <v-card-actions>
              <v-btn>LinkedIn</v-btn>
              <v-btn>GitHub</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Vue.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png' },
        { text: 'Vuetify', icon: 'https://iconape.com/wp-content/png_logo_vector/vuetify.png' },
        { text: 'C#', icon: 'https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png' },
        { text: 'SQL', icon: 'https://cdn-icons-png.flaticon.com/512/4299/4299956.png' },
        { text: 'REST APIs', icon: 'https://toppng.com/uploads/preview/rest-api-icon-rest-api-icon-11553510526uqs2ynyga2.png' },
        { text: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
      ],
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>
