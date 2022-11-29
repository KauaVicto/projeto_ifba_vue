<template>
  <div class="cadastro container">
    <div class="w-50 mx-auto">
      <form @submit="cadastrarProduto">
        <div class="row">
          <div class="form-group my-3 col-md-12">
            <label for="produto_nome">Nome:</label>
            <input
              type="text"
              class="form-control"
              id="produto_nome"
              v-model="nome"
              placeholder="Digite o nome do produto"
              required
            />
          </div>
          <div class="form-group my-3 col-md-6">
            <label for="produto_tipo">Tipo</label>
            <select
              class="form-control"
              id="produto_tipo"
              v-model="tipo"
              required
            >
              <option value="" selected>Selecione um tipo</option>
              <option value="Tênis">Tênis</option>
              <option value="Social">Social</option>
              <option value="Sapatênis">Sapatênis</option>
              <option value="Sapatilha">Sapatilha</option>
              <option value="Salto">Salto</option>
              <option value="Chuteira">Chuteira</option>
            </select>
          </div>
          <div class="form-group my-3 col-md-6">
            <label for="produto_genero">Gênero</label>
            <select
              class="form-control"
              id="produto_genero"
              v-model="genero"
              required
            >
              <option value="" selected>Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Unissex">Unissex</option>
            </select>
          </div>
          <div class="form-group my-3 col-md-6">
            <label for="produto_marca">Marca:</label>
            <input
              type="text"
              class="form-control"
              id="produto_marca"
              placeholder="Digite a marca do produto"
              v-model="marca"
              required
            />
          </div>
          <div class="form-group my-3 col-md-6">
            <label for="produto_preco">Preço(R$):</label>
            <input
              type="number"
              class="form-control"
              id="produto_preco"
              step="0.01"
              v-model="preco"
              required
            />
          </div>
          <div class="form-group col-md-12">
            <label for="produto_img">Insira uma imagem do produto</label>
            <input
              type="file"
              accept="image/*"
              class="form-control-file"
              @change="updatePhoto($event.target.files)"
            />
          </div>
          <button type="submit" class="btn btn-primary my-3">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastrarView",
  data() {
    return {
      nome: null,
      tipo: null,
      genero: null,
      marca: null,
      preco: null,
      img: {
        nome: null,
        data: null
      },
    };
  },
  methods: {
    cadastrarProduto(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        tipo: this.tipo,
        genero: this.genero,
        marca: this.marca,
        preco: this.preco,
        img: this.img.nome
      };

      console.log(data)
    },
    updatePhoto(files) {
      if (!files.length) return;

      // salva os dados da imagem
      this.img = {
        nome: files[0].name,
        data: files[0],
      };
    },
  },
};
</script>



<style scoped>
* {
  font-size: 1.5rem;
  color: white;
}

.cadastro {
  min-height: calc(100vh - 338px);
}

input,
input:focus,
select,
select:focus,
option {
  background-color: black;
  color: white;
}
</style>
