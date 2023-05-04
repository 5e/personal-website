<template>
    <v-container>
        <v-responsive>
            <v-row>
                <v-col lg="12" xl="12" md="12" sm="12" xs="12">
                    <v-card class="elevation-0" rounded="xl">
                        <v-card-item>
                            <v-card-title>
                                Education
                            </v-card-title>
                        </v-card-item>
                        <v-card-text>
                            University of South Wales <i>(2019 - 2024)</i><br />
                            BSc (Hons) in Digital and Technology Solutions
                            <div class="mb-2"></div>
                            Coleg Gwent <i>(2016 - 2019)</i><br />
                            A-Levels in Maths, Further Maths, Computer Science
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
  