<template>
  <v-row no-gutters>
    <v-col
      xl="4"
      offset-xl="4"
      lg="6"
      offset-lg="3"
      sm="10"
      offset-sm="1"
      xs="10"
      offset-xs="1"
    >
      <AppBar></AppBar>
      <div class="px-5">
        <slot />
      </div>
    </v-col>
  </v-row>
</template>

<style>
html {
  font-family: Inter, sans-serif;
}
</style>
