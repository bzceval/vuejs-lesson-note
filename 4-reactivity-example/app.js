const app = Vue.createApp({
   data() {
    return {
        search: "",
        itemList: ["elma", "armut", "kiraz", "çilek"],
        filtered: [],
        searchReactivity: "",
    }
   },
   methods: {
    searchList() {
        const filteredList = this.itemList.filter((i) => i.includes(this.search))
        this.filtered = filteredList
    }
   },
   //burası reactivitsiz hali
   // reactivity ile nasıl yaparım?
   // sure computed
   // her şey için ayrı ayrı değişken tanımlamak yerine ve ayrı method ile kontrol edeceğine computed ile halledebilirsin
   computed: {
    filteredList(){
        return this.itemList.filter((i) => i.includes(this.searchReactivity))
    }
   }
}).mount("#app")