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
};
</script>

<style>
* {
  margin: 0;
  font-family: Helvetica;
  color: white;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
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
