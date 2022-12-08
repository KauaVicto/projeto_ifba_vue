<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  methods: {
    formatarNumero(numero) {
      let valorFormatado = numero.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return valorFormatado;
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inika&family=Roboto+Slab:wght@900&display=swap');

* {
  margin: 0;
  font-family: Helvetica;
  color: white;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 80%;
}

body {
  overflow-x: hidden;
  background-color: #222;
}

.main-container {
  margin-top: 50px;
}

h1 {
  font-size: 2.7rem;
}
</style>
