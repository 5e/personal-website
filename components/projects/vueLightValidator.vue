<template>
  <div class="bg-grey-darken-4 rounded-lg pl-3 py-3">
    <div>
      <a class="text-grey" href="https://5e.github.io/vue-light-validator/#/"
        >vue-light-validator</a
      >
    </div>
    <div class="text-grey">
      Light Vue 3 directive for easy form validation using no dependencies.
    </div>

    <div class="mt-3">
      <div style="width: 300px">
        <input
          class="bg-white rounded-lg pa-2"
          style="width: 100%"
          readonly
          :value="typing"
        />
        <div class="rounded-lg pa-2 mt-1" :class="className">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typing: "",
      arrayOfInputs: ["Adam", "1 High Street", "07792374212"],
      currentInputIndex: 0,
      charIndex: 0,
      intervalId: null,
      errorMessage: "Phone number incorrect",
      className: "bg-red",
    };
  },
  methods: {
    startTyping() {
      this.intervalId = setInterval(() => {
        if (
          this.charIndex < this.arrayOfInputs[this.currentInputIndex].length
        ) {
          this.typing +=
            this.arrayOfInputs[this.currentInputIndex][this.charIndex];
          this.charIndex++;
        } else {
          clearInterval(this.intervalId);
          if (this.currentInputIndex != 2) {
            this.deleteTyping();
          } else {
            this.className = "bg-green";
            this.errorMessage = "Phone number correct";
          }
        }
      }, 200); // Adjust the speed of typing here
    },
    deleteTyping() {
      this.intervalId = setInterval(() => {
        if (this.typing.length > 0) {
          this.typing = this.typing.slice(0, -1);
        } else {
          clearInterval(this.intervalId);
          if (this.currentInputIndex < this.arrayOfInputs.length - 1) {
            this.currentInputIndex++;
            this.charIndex = 0;
            this.startTyping();
          }
        }
      }, 200); // Adjust the speed of deleting here
    },
  },
  mounted() {
    this.startTyping();
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // Clear the interval when the component is destroyed
  },
};
</script>
