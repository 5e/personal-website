<template>
  <div>
    <h3 class="mb-3">Experience</h3>
    <div class="mb-8">
      Mad Devs LTD <i>(2024 - present)</i>
      <p class="text-grey">
        Software developer at Mad Devs building cloud-based platforms for
        automotive dealerships. Worked on iTrackLEADS and iStoreDOCS, creating
        new user-facing features, ensuring compliance, and integrating with
        third-party systems. Solutions support 1,500+ dealerships globally,
        streamlining sales and after-sales operations. Working in an agile
        environment using MySQL, MongoDB, Vue.js, C#, and Amazon AWS.
      </p>
    </div>
    <div>
      Welsh Revenue Authority <i>(2019 - 2024)</i>
      <p class="text-grey">
        End-to-end development on in-house solutions consisting of designing,
        building and implementing web applications to reduce reliance on third
        party suppliers. 4 years of experience working in an agile/scrum
        environment building full stack applications using Vue.js, C#, Microsoft
        SQL Server, and Microsoft Azure.
      </p>
    </div>
    <br />
    <div class="text-grey mt-8">
      Experience in using cloud platforms such as Amazon AWS, Microsoft Azure
      and recently Cloudflare Workers to create serverless functions. In
      addition to this, experience in Python from personal side-projects.
    </div>
    <h3 class="mt-3 mb-2">Skills</h3>
    <v-row>
      <v-col cols="6" class="pb-0" v-for="item in items" :key="item.text">
        <v-sheet class="d-flex px-3 py-2 rounded-lg" color="grey-darken-4">
          <span
            >{{ item.text }}
            <br />
            <span style="font-size: 0.75rem">
              {{ stringDate(item.yearStarted) }}
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
function stringDate(input) {
  const startDate = new Date(input);
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  return `${years} ${years !== 1 ? "years" : "year"}`;
}

let items = [
  {
    text: "Vue.js",
    icon: "mdi-vuejs",
    yearStarted: "2019-09-09",
  },
  {
    text: "Vuetify",
    icon: "mdi-vuetify",
    yearStarted: "2019-09-09",
  },
  {
    text: "C#",
    icon: "mdi-dot-net",
    yearStarted: "2019-09-09",
  },
  {
    text: "SQL",
    icon: "mdi-database-search",
    yearStarted: "2018-09-09",
  },
  {
    text: "REST APIs",
    icon: "mdi-cloud-braces",
    yearStarted: "2019-09-09",
  },
  {
    text: "Python",
    icon: "mdi-language-python",
    yearStarted: "2022-01-01",
  },
  {
    text: "JavaScript",
    icon: "mdi-language-javascript",
    yearStarted: "2018-01-01",
  },
  {
    text: "MongoDB",
    icon: "mdi-database-search",
    yearStarted: "2024-06-24",
  },
  {
    text: "AWS",
    icon: "mdi-server",
    yearStarted: "2024-06-24",
  },
];
</script>
