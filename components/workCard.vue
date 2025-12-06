<template>
  <v-row class="mb-6">
    <v-col cols="3" class="timeline text-grey pt-4">
      {{ props.timeline }}
    </v-col>
    <v-col
      cols="9"
      :class="props.hyperlink ? 'hover' : ''"
      @click="openHyperlink()"
    >
      <div class="font-weight-medium">
        {{ props.title
        }}<span v-if="props.company"> • {{ props.company }}</span>
        <span v-if="props.hyperlink">
          <v-icon size="x-small" class="ml-1" style="margin-bottom: 1px"
            >mdi-arrow-top-right</v-icon
          >
        </span>
      </div>
      <p class="text-grey-lighten-1" style="font-size: 0.875rem">
        {{ props.description }}
      </p>

      <div class="mt-2" v-if="props.tags">
        <v-chip
          color="blue-lighten-3"
          size="small"
          v-for="tag in props.tags"
          :key="tag"
          class="mr-1"
          >{{ tag }}</v-chip
        >
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  timeline: String,
  company: String,
  tags: Array,
  hyperlink: String,
});

function openHyperlink() {
  if (props.hyperlink) {
    window.open(props.hyperlink, "_blank");
  }
}
</script>

<style scoped>
.hover {
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;
}

.hover:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
