<template>
  <div class="home container">
    <div class="row">
      <div v-for="produto in produtos" :key="produto.id" class="col-md-6 item">
        <!-- Produtos -->

        <ProdutoList
          :img_src="produto.img"
          :nome="produto.nome"
          :id="produto.id"
          :preco="formatarNumero(produto.preco)"
          :genero="produto.genero"
          :marca="produto.marca"
          :tipo="produto.tipo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProdutoList from "../components/ProdutoList.vue";
import Vue from "vue";

/* importando o axios */
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    ProdutoList,
  },
  data() {
    return {
      produtos: null,
    };
  },
  mounted() {
    this.getProdutos();
  },
  methods: {
    async getProdutos() {
      await axios.get("http://localhost:8080/cors-library/managed/produtos").then((response) => {
        this.produtos = Array.from(response.data);
      });
    },
    formatarNumero(numero) {
      if (typeof numero === 'number') {
        return numero.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      }else{
        return '';
      }
    },
  },
};
</script>

<style scoped>
.home {
  min-height: 400px;
}

.item {
  padding: 0;
  margin: 10px 0;
}
</style>
