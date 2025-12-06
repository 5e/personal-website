<template>
  <div>
    <v-row>
      <v-col cols="3">
        <div class="timeline text-grey pt-1">Skills</div>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col :cols="4" v-for="(item, index) in items" :key="item.text">
            <div class="d-flex align-center">
              <v-icon large class="mr-2">{{ item.icon }}</v-icon>
              <div>
                <div>{{ item.text }}</div>
                <div class="text-grey-lighten-1 timeline">
                  {{ stringDate(item.yearStarted) }}
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
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
