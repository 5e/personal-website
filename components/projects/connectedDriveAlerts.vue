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
          v-for="card in cards"
        >
          <div class="d-inline-flex" style="width: 100%">
            <div style="width: 50%">
              <img width="140" src="/BMW1.png" />
            </div>
            <div style="width: 50%" class="text-right text-grey">
              BMW M140i<br />
              <span style="text-wrap: nowrap">{{ card.vehicleStatus }}</span>
            </div>
          </div>
          <div class="rounded-lg" style="overflow: hidden; height: 120px">
            <img width="300" :src="card.imgName" />
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
      cards: [
        {
          vehicleStatus: "Locked",
          imgName: "/staticmap1.jpg",
        },
        {
          vehicleStatus: "Window open",
          imgName: "/staticmap2.jpg",
        },
        {
          vehicleStatus: "Boot open",
          imgName: "/staticmap3.jpg",
        },
        {
          vehicleStatus: "Unlocked",
          imgName: "/staticmap4.jpg",
        },
        {
          vehicleStatus: "Locked",
          imgName: "/staticmap1.jpg",
        },
      ],
      scrollingDiv: null,
    };
  },
  methods: {
    scrollHandler() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.scrollingDiv.scrollLeft = winScroll;
    },
  },
  mounted() {
    this.scrollingDiv = this.$refs.scrollingDiv;
    window.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>
