<template>
  <div>
    <h3 class="mb-3">Experience</h3>
    <div>
      Welsh Revenue Authority <i>(2019 - present)</i>
      <p class="text-grey">
        End-to-end development on in-house solutions consisting of designing,
        building and implementing web applications to reduce reliance on third
        party suppliers.
      </p>
    </div>
    <br />
    <div class="text-grey">
      4 years of experience working in an agile/scrum environment building full
      stack applications using Vue.js, C# and Microsoft SQL Server. Experience
      in using cloud platforms such as Amazon AWS, Microsoft Azure and recently
      Cloudflare Workers to create serverless functions. In addition to this,
      experience in Python from personal side-projects.
    </div>
    <h3 class="mt-3">Skills</h3>
    <v-row>
      <v-col cols="6" class="pb-0" v-for="item in items" :key="item.text">
        <v-sheet class="d-flex px-3 py-2 rounded-lg" color="grey-darken-4">
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
  </div>
</template>

<script setup>
let items = [
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
];
</script>

<style scoped></style>
