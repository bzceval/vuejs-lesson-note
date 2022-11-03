const app = Vue.createApp({
    data() {
        return {
            title: "Test Başlığı",
            itemList: []
        }
    },
    beforeCreate(){
        //fetched işlemlerinde çalışır
        console.log("beforeCreate çalıştı...")
        setTimeout(() => {
            this.itemList = [1, 2, 3, 4]
        }, 2000)
    },
    created(){
        console.log("created çalıştı...")
    },
    beforeMount(){
        console.log(" beforeMount çalıştı...")
    },
    mounted(){
        console.log("mounted çalıştı...")
    },
    beforeUpdate(){
        console.log("beforeUpdate çalıştı...")
    },
    updated(){
        //fetched işlemlerinde beforeCreate() ile beraber çalışır
        console.log("updated çalıştı...")
    },
    beforeUnmounted(){
        console.log("beforeUnmounted çalıştı...")
    },
    unmounted(){
        console.log("unmounted çalıştı...")
    }
}).mount("#app")

setTimeout(() => {
    // unmounted() ile beforeunmounted() fonksiyonları çalışır.
    app.unmount()
}, 5000)