<template>
    <v-bottom-navigation>
        <v-btn v-for="(item, i) in items" :key="i" :to="item.route" exact>
            {{ item.title }}
        </v-btn>
    </v-bottom-navigation>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'home',
                    value: 1,
                    route: '/'
                },
                {
                    title: 'experience',
                    value: 2,
                    route: '/experience'
                },
                {
                    title: 'education',
                    value: 3,
                    route: '/education'
                },
            ],
        };
    },

};
</script>
  
  
<style scoped></style>
  