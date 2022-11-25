<template>
  <div class="row">
    <div class="col-md-6">
      <img :src="img_calcado" alt="" id="img-calcado" />
    </div>
    <div class="col-md-6">
      <h1>teste</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoList",
  props: ["id", "nome", "img_src", "preco", "genero", "marca", "tipo"],
};
</script>

<style scoped>
.produto {
  margin: 0;
}
.img_calcado {
  width: 100%;
  border-radius: 10px;
  border: 2px solid black;
}

#title_produto a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
</style>