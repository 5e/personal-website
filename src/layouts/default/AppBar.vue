<template>
  <div class="align-center d-flex fill-height justify-end">
    <v-list density="compact" class="bg-transparent">
      <v-list-item v-for="(item, i) in items" :key="i" :value="item.title" rounded="xl" :to="item.route" exact>
        <v-list-item-title v-text="item.title"></v-list-item-title>

      </v-list-item>
    </v-list>
  </div>
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
