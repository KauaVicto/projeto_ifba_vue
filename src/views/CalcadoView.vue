<template>
  <div class="calcado main-container container">
    <div class="row">
      <div class="col-md-6">
        <img :src="img_calcado" alt="" id="img-calcado">
      </div>
      <div class="col-md-6">
        <h1>teste</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CalcadoView',
  data() {
    return {
      img_calcado: '/img/calcados/calcado_teste.png'
    }
  }
}
</script>

<style scoped>
  #img-calcado {
    border: 2px solid #655A5A;
    border-radius: 20px;
  }
</style>
