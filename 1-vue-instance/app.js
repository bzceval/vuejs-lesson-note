//vuejs ile kontrol etmek istediğim yere vuejs uygulamasını create etmeliyim 
// Vue.createApp() fonksiyonu
// Bu fonksiyon içerisinde vuejs uygulamasını daha anlamlı hale getirmek için bir constructor alır.
// String interpolition: data içerisine yazılan key ile index içerisine yazdırabilirim.

const app = Vue.createApp({
    data() {
        return {
            title: "Vuejs Bootcampinde 1. gün",
            content: "Lorem ipsum dolar sit amet..."
        }
    }
}).mount("#app")

//Vue2 Version
// new Vue({
//     data: {}
// })