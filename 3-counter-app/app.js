const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter1: 0,
      counter2: 0,
    };
  },
  methods: {
    artır() {
      this.counter++;
    },
    azalt() {
      this.counter--;
    },
  },
  computed: {
    // virtual domu kullanmak için kullanılır.
    // bir fonksiyon gibi çalışan değişkenlerdir.
    // computed içindeki değeri okuyabiliriz, ama set edemeyiz.
    // reaktif olarak method gibi tanımlanan yapılardır.
    // ilgili fonksiyon geldiğinde çalıştırır.
    // geriye bir değer döndürmesi gerektiği için return kullanılır.=> zorundalık
    getCounter1Result() {
      console.log("counter çalıştı");
      // this.counter1 ++;
      return this.counter1 > 5 ? "Büyük" : "Küçük";
    },
    getCounter2Result() {
      console.log("counter çalıştı");
      // this.counter1 ++;
      return this.counter2 > 5 ? "Büyük" : "Küçük";
    },
    // computed nasıl çalışır? herkes kendi kafasına göre çalışır :D
    // counterları kontrol eder eğer bir değişiklik varsa değiştirir.
    // ama method öyle değil.
  },
  watch: {
    // bir diğer reactivity elemanıdır.
    // bizim data da ya da computed da bulunan bilgiyi spesifik olarak izlememizi sağlar.
    // watcher değer değiştiğinde çalışır, bir değer return etmek zorunda değil.

    // Örnek counter1 için yapıldı
    // izlemek istediğimiz datayı yazarız ve bu data functionı 2 parametre alır.
    counter1(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
    // yada bir functionu izlemek istersek aynı şekilde tanımlarız.
    getCounter1Result(newValue, oldValue) {
        console.log(oldValue, "=>", newValue)
    }
  },
}).mount("#app");
