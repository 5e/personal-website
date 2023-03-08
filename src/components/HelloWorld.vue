<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <!-- <v-img contain height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" /> -->



      <v-row class="d-flex  justify-center">
        <v-col lg="4" xl="2" md="6" sm="6" xs="6">
          <v-card class="elevation-5">
            <v-card-item>
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
              WIP
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

    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>
