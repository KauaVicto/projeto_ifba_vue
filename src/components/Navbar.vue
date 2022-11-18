<template>
  <nav>
    <router-link to="/" id="logo-url">
      <img src="/img/logo.png" alt="logo" id="logo" />
    </router-link>
    <router-link to="/">HOME</router-link>
    <router-link to="/cadastrar">CADASTRAR PRODUTO</router-link>
  </nav>
</template>
  
  <script>
export default {
  name: "Navbar",
};
</script>
  
  <style scoped>
nav {
  background-color: #0e0e0e;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
}

#logo-url {
  margin: auto;
  margin-left: 0;
}

/* #logo {
  height: 100px;
} */

nav a {
  color: #e2e2e2;
  text-decoration: none;
  margin: 12px;
  transition: 0.3s;
  font-size: 1.5rem;
}

nav a:hover {
  color: white;
  border-bottom: 2px solid white;
}
</style>