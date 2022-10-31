//vuejs ile kontrol etmek istediğim yere vuejs uygulamasını create etmeliyim 
// Vue.createApp() fonksiyonu
// Bu fonksiyon içerisinde vuejs uygulamasını daha anlamlı hale getirmek için bir constructor alır.
// 1- String interpolition: data içerisine yazılan key ile index içerisine yazdırabilirim.
// String interpolitionu bir elementin text-contenti ile yaparız 
// Fakat attribütüne yapamayız mesela a elementinin href içini
// Bu durumu nasıl düzeltirim?
// 2- v-bind
// attribute değerini vuejs üzerinde bulunan ... data adıyla bağla
// for exp: v-bind:href="url"   
const app = Vue.createApp({
    data() {
        return {
            title: "Vuejs Bootcampinde 1. gün",
            content: "Lorem ipsum dolar sit amet...",
            url: "https://www.google.com/teapot",
            eduflow: {
                title: "Object Şeklinde Dataları Alma",
                content: "Tıklada dinamik şekilde al",
                target: "_blank",
                url: "https://www.google.com/teapot",
                alt: "417 kod hatası"
            },
            coords: {
                message: "Hellü",
                x: 0,
                y: 0,
            }
        }
    },
    /* Javascript fonksiyonlarını içeren key => methods  */
    /* vuejs içinde fonksiyonları tanımlama */
    methods: {
        sendAlert() {
            alert("Tıkla buttonu çalıştı!")
        },
        changeTitle() {
            // data içerisinde vue instancesinde değiştirme this keyi ile olur. 
            this.title = "Bu değişmiş title bilgisi"
        },
        changeDynamicTitle(parametreTitle) {
            // indexten gelen parametreden ile title değiştirme 
            this.title = parametreTitle;
        },
        /* add mouse move function */
        updateCoords(parametreMessage, event) {
            // console.log(message, event.x, event.y)
            this.message = parametreMessage;
            this.coords = {
                x: event.x,
                y: event.y
            }
        }
    }
}).mount("#app")
//other use
//app.mount("#app")

//Vue2 Version
// new Vue({
//     data: {}
// })