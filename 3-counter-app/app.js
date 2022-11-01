const app = Vue.createApp({
   data() {
    return {
        counter: 0
    }
   },
   methods: {
    artır() {
        this.counter ++;
    },
    azalt() {
        this.counter --;
    }
   }
}).mount("#app")