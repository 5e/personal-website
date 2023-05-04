<template>
    <v-container>
        <v-responsive>
            <v-row>
                <v-col lg="12" xl="12" md="12" sm="12" xs="12">
                    <v-card class="elevation-0" rounded="xl">
                        <v-card-item>
                            <v-card-title>
                                Experience
                            </v-card-title>
                        </v-card-item>
                        <v-card-text class="pb-0">
                            Welsh Revenue Authority <i>(2019 - present)</i><br />
                            End-to-end development on in-house solutions consisting of
                            designing, building and implementing web applications to reduce
                            reliance on third party suppliers.
                        </v-card-text>

                        <v-card-text class="pb-0">
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
                        <v-card-text class="pb-7">
                            <div><b>Skills</b></div>
                            <v-row>
                                <v-col cols="6" class="pb-0" v-for="item in items" :key="item.text">
                                    <v-sheet rounded class="d-flex px-3 py-2" color="grey-darken-3">
                                        <span>{{ item.text }}
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

    },
    methods: {

    },
    mounted() {

    },
};
</script>
  
<style scoped></style>
  