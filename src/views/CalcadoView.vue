<template>
  <div class="calcado main-container container">
    <ProdutoDetail />
  </div>
</template>

<script>
import ProdutoDetail from '@/components/ProdutoDetail.vue';

export default {
  name: 'CalcadoView',
  components: {
    ProdutoDetail
  },
  data() {
    return {
      produto: null
    }
  },
  mounted() {
    this.getProduto()
  },
  methods: {
    async getProduto() {
      await axios.get("http://localhost:3000/produtos/" + this.$route.params.id).then((response) => {
        this.produtos = Array.from(response.data);
      });
    },
  }
}
</script>

<style scoped>
  #img-calcado {
    border: 2px solid #655A5A;
    border-radius: 20px;
  }
</style>
