<template>
  <div class="calcado main-container container">
    <ProdutoDetail
      :img_src="img"
      :nome="name"
      :id="id"
      :preco="formatarNumero(preco)"
      :genero="genero"
      :marca="marca"
      :tipo="tipo"
    />
  </div>
</template>

<script>
import ProdutoDetail from "@/components/ProdutoDetail.vue";

/* importando o axios */
import axios from "axios";

export default {
  name: "CalcadoView",
  components: {
    ProdutoDetail,
  },
  data() {
    return {
      id: null,
      name: null,
      marca: null,
      tipo: null,
      genero: null,
      img: null,
      preco: null,
    };
  },
  mounted() {
    this.getProduto();
  },
  methods: {
    async getProduto() {
      await axios
        .get(
          "http://localhost:8080/cors-library/managed/produtos/" +
            this.$route.params.id
        )
        .then((response) => {
          this.id = response.data.id;
          this.name = response.data.name;
          this.marca = response.data.marca;
          this.tipo = response.data.tipo;
          this.genero = response.data.genero;
          this.img = response.data.img_byte;
          this.preco = response.data.preco;
        });
    },
    formatarNumero(numero) {
      if (typeof numero === "number") {
        return numero.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
#img-calcado {
  border: 2px solid #655a5a;
  border-radius: 20px;
}

.calcado {
  min-height: calc(100vh - 338px);
}
</style>
