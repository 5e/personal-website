<template>
  <div class="bg-grey-darken-4 rounded-lg pl-3 py-3">
    <h4>
      <a class="text-grey" href="https://github.com/5e/streamdeck-hwinfo-plugin"
        >streamdeck-hwinfo-plugin</a
      >
    </h4>
    <div class="text-grey">
      A plugin for the Stream Deck which displays hardware information. It has
      been downloaded
      <span style="font-weight: 900">{{ downloads }}</span> times.
    </div>
    <div class="mt-3 d-flex justify-space-evenly">
      <div v-html="svgString"></div>
      <svg
        height="144"
        width="144"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="arc1"
          fill="none"
          stroke="orange"
          stroke-width="20"
          d="M 117.96266658713867 112.56725658119235 A 60 60 0 1 0 26.037333412861322 112.56725658119235"
        ></path>
        <path
          id="arc1"
          fill="none"
          stroke="#626464"
          :stroke-dasharray="getGaugePixels(sensorReading) + ' 1000'"
          stroke-width="20"
          d="M 117.96266658713867 112.56725658119235 A 60 60 0 1 0 26.037333412861322 112.56725658119235"
        ></path>
        <text
          x="72"
          y="130"
          font-family="Inter"
          font-size="32"
          stroke="grey"
          fill="grey"
          text-anchor="middle"
        >
          CPU
        </text>
        <text
          x="72"
          y="83"
          font-family="Inter"
          font-size="32"
          stroke="white"
          fill="white"
          text-anchor="middle"
        >
          {{ 100 - sensorReading }}%
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sensorReading: 50,
      downloads: "",
      graphHistory: [],
      svgString: "",
    };
  },
  methods: {
    getGaugePixels(sensorValue) {
      return 272 * ((sensorValue - 0) / (100 - 0));
    },
    generateSvg(
      graphColor,
      backgroundColor,
      title,
      sensorValue,
      titleFontSize,
      sensorFontSize,
      fontName
    ) {
      let svgBuilder = `<svg
  	height="144"
  	width="144"
  	xmlns="http://www.w3.org/2000/svg"
  	xmlns:xlink="http://www.w3.org/1999/xlink"
    >
  	<rect height="144" width="144" fill="${backgroundColor}"></rect>`;

      for (let index = 0; index < this.graphHistory.length; index++) {
        const element = this.graphHistory[index];
        //setting the points
        svgBuilder += `<line
  	  x1="${index * 2}"
  	  y1="144"
  	  x2="${index * 2}"
  	  y2="${element.y2}"
  	  stroke="${graphColor}"
  	  stroke-width="2"
  	></line>`;
      }

      svgBuilder += `<text
      x="72"
      y="42"
      font-family="${fontName}"
      font-size="${titleFontSize}"
      stroke="grey"
      fill="grey"
      text-anchor="middle"
    >${title}</text>`;

      svgBuilder += `<text
      x="72"
      y="116"
      font-family="${fontName}"
      font-size="${sensorFontSize}"
      stroke="white"
      fill="white"
      text-anchor="middle"
    >${sensorValue}</text>`;

      svgBuilder += `</svg>`;

      return svgBuilder;
    },
    addSensorValue(sensorValue, graphMinValue, graphMaxValue) {
      if (this.graphHistory.length >= 73) {
        this.graphHistory.shift();
      }

      let yCoordinate =
        144 -
        ((sensorValue - graphMinValue) / (graphMaxValue - graphMinValue)) * 144;

      let gaugePixels =
        272 * ((sensorValue - graphMinValue) / (graphMaxValue - graphMinValue));
      this.graphHistory.push({
        y1: yCoordinate,
        y2: yCoordinate,
        gaugePixels: gaugePixels,
      });
    },
  },

  created() {
    this.addSensorValue(this.sensorReading, 0, 100);
    this.svgString = this.generateSvg(
      "green",
      "#121212",
      "GPU",
      this.sensorReading + "°C",
      32,
      32,
      "Inter"
    );
  },

  mounted() {
    setInterval(() => {
      this.sensorReading += Math.floor(Math.random() * 11 - 5);
      if (this.sensorReading > 100) {
        this.sensorReading = 100;
      } else if (this.sensorReading < 0) {
        this.sensorReading = 0;
      }
      this.addSensorValue(this.sensorReading, 0, 100);

      this.svgString = this.generateSvg(
        "green",
        "#121212",
        "GPU",
        this.sensorReading + "°C",
        32,
        32,
        "Inter"
      );
    }, 250);

    $fetch("https://mp-gateway.elgato.com/products?name=HWiNFO%20Reader")
      .then((response) => {
        let downloads = response.results[0].download_count;
        this.downloads = 0;
        let intervalId = setInterval(() => {
          if (this.downloads < downloads) {
            this.downloads += 53;
          } else {
            this.downloads = downloads;
            clearInterval(intervalId);
          }
        }, 30);
      })
      .catch((error) => {
        console.error(error);
        this.downloads = 3050;
      });
  },
};
</script>
