const app = Vue.createApp({
   data() {
    return {
        counter: 0,
        counter1: 0,
        counter2: 0
    }
   },
   methods: {
    artır() {
        this.counter ++;
    },
    azalt() {
        this.counter --;
    }
   },
   computed: {
   // virtual domu kullanmak için kullanılır.
   // bir fonksiyon gibi çalışan değişkenlerdir.
   // computed içindeki değeri okuyabiliriz, ama set edemeyiz.
   // reaktif olarak method gibi tanımlanan yapılardır.
   // ilgili fonksiyon geldiğinde çalıştırır.
   // geriye bir değer döndürmesi gerektiği için return kullanılır.
   getCounter1Result() {
    console.log("counter çalıştı")
    // this.counter1 ++;
    return this.counter1 > 5 ? "Büyük" : "Küçük"
   },
   getCounter2Result() {
    console.log("counter çalıştı")
    // this.counter1 ++;
    return this.counter2 > 5 ? "Büyük" : "Küçük"
   }
   }
}).mount("#app")