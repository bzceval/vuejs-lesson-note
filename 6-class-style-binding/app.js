const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      bgRed: false,
      boxClass: "border red",
      bgColor: "cyan",
    };
  },
  computed: {
    boxClasses() {
      return {border : this.showBorder, green : this.bgRed}
    }
  }
}).mount("#app");
