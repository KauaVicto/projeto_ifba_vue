<template>
  <!-- <div class="row produto">
    <div class="col-md-3">
      <a :href="'/calcado/' + id">
        <img
          :src="'data:image/jpeg;base64,' + img_src"
          alt="Imagem do calçado"
          class="img_calcado"
      /></a>
    </div>
    <div class="col-md-9">
      <h2 class="display-4" id="title_produto">
        <a :href="'/calcado/' + id">{{ nome }}</a>
      </h2>
      <p>{{ preco }}</p>
      <p>Gênero: {{ genero }}</p>
      <p>Marca: {{ marca }}</p>
      <p>Tipo: {{ tipo }}</p>
    </div>
  </div> -->
  <div class="card bg-dark" style="width: 20rem">
    <img class="card-img-top" :src="'data:image/jpeg;base64,' + img_src" alt="Card image cap" />
    <div class="card-body">
      <h3 class="card-title">{{ nome }}</h3>
      <p class="card-text">
        <span id="preco">{{ preco }}</span>
      </p>
      <div class="btn-acessar"><a :href="'/calcado/' + id" class="btn btn-primary">Acessar</a></div>
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

.btn-acessar {
  position: relative;
  height: 40px;
}

.btn-acessar a {
  position: absolute;
  right: 0;
  bottom: 0;
}

#preco {
  font-family: 'Inika';
  font-size: 2rem;
}
</style>