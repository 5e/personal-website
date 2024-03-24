<template>
  <div class="bg-grey-darken-4 rounded-lg py-3 mt-3">
    <div class="pl-3 mb-3">
      <h4>
        <a class="text-grey" href="https://github.com/5e/connected-drive-alerts"
          >connected-drive-alerts</a
        >
      </h4>
      <div class="text-grey">
        Adding vehicle notifications to the BMW Connected Drive app.
      </div>
    </div>

    <div
      ref="scrollingDiv"
      style="overflow: hidden; width: 100%; flex-wrap: nowrap"
    >
      <div class="d-inline-flex">
        <div
          class="bg-grey-darken-3 rounded-lg pa-3 mr-4"
          style="width: 300px"
          v-for="x in 4"
        >
          <div class="d-inline-flex" style="width: 100%">
            <div style="width: 50%">
              <img width="140" src="/BMW1.png" />
            </div>
            <div style="width: 50%" class="text-right text-grey">
              BMW M140i<br />
              <span style="text-wrap: nowrap">{{ vehicleStatus[x - 1] }}</span>
            </div>
          </div>
          <div class="rounded-lg" style="overflow: hidden; height: 120px">
            <img width="300" :src="'/staticmap' + x + '.jpg'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicleStatus: ["Locked", "Window open", "Boot open", "Unlocked"],
      time: ["11:37", "12:54", "15:53", "17:22"],
    };
  },
  setup() {
    const scrollingDiv = ref(null);
    const scrollHandler = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      scrollingDiv.value.scrollLeft = winScroll / 3;
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollHandler);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandler);
    });
    return {
      scrollingDiv,
    };
  },
};
</script>
