<template>
  <div class="row">
    <div class="col-md-6">
      <img :src="('data:image/jpeg;base64,'+img_src)" alt="" id="img-calcado" />
    </div>
    <div class="col-md-6">
      <h2 class="display-4" id="title_produto">
        <a :href="'/calcado/' + id">{{ nome }}</a>
      </h2>
      <p>
        {{ preco }}
      </p>
      <p>Gênero: {{ genero }}</p>
      <p>Marca: {{ marca }}</p>
      <p>Tipo: {{ tipo }}</p>
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
#img-calcado {
  width: 300px;
  border-radius: 10px;
  border: 2px solid black;
}

#title_produto a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
</style>