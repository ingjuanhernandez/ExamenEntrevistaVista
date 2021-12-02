<template>
  <v-row>
    <v-col cols="6" class="offset-md-1">
      <h1 class="">
        Introduce los datos para crear un nuevo producto o selecciona uno de la
        tabla para editarlos
      </h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="ProductoSeleccionado.nombre"
          :rules="reglasCamposTexto"
          label="Nombre"
        ></v-text-field>
        <v-text-field
          v-model="ProductoSeleccionado.categoria"
          :rules="reglasCamposTexto"
          label="Categoría"
        ></v-text-field>
        <v-text-field
          v-model="ProductoSeleccionado.precio"
          type="number"
          :rules="reglasCamposTexto"
          label="Precio"
        ></v-text-field>
        <v-text-field
          v-model="ProductoSeleccionado.cantidad"
          type="number"
          :rules="reglasCamposTexto"
          label="Cantidad"
        ></v-text-field>
        <v-textarea
          v-model="ProductoSeleccionado.descripcion"
          :rules="reglasCamposTexto"
          label="Descripcion"
        ></v-textarea>
        <v-row>
          <v-col>
            <v-btn :disabled="!valid" color="primary" @click="Guardar">
              Guardar Producto
            </v-btn>
          </v-col>
          <v-col>
            <v-btn color="success" @click="ActualizarProducto()">
              Actualizar producto
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    reglasCamposTexto: [
      (v) => !!v || 'Campo obligatorio',
      (v) => (v && v.length) || 'Nombre muy corto'
    ]
  }),
  computed: {
    ProductoSeleccionado: {
      get() {
        return this.$store.getters.ObtenerProducto
      }
    }
  },
  methods: {
    Guardar() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('AgregarProducto', {
            nombre: this.ProductoSeleccionado.nombre,
            categoria: this.ProductoSeleccionado.categoria,
            precio: parseFloat(this.ProductoSeleccionado.precio),
            cantidad: parseInt(this.ProductoSeleccionado.cantidad),
            descripcion: this.ProductoSeleccionado.descripcion
          })
          .then((resp) => {
            alert('Producto almacenado correctamente: ', resp)
          })
          .then(() => {
            this.$store.dispatch('ObtenerProductos')
          })
      }
    },
    ActualizarProducto() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('ActualizarProducto', {
            id: this.ProductoSeleccionado.id,
            nombre: this.ProductoSeleccionado.nombre,
            categoria: this.ProductoSeleccionado.categoria,
            precio: parseFloat(this.ProductoSeleccionado.precio),
            cantidad: parseInt(this.ProductoSeleccionado.cantidad),
            descripcion: this.ProductoSeleccionado.descripcion
          })
          .then((resp) => {
            alert('Producto actualizado correctamente: ', resp)
          })
          .then(() => {
            this.$store.dispatch('ObtenerProductos')
          })
      }
    }
  }
}
</script>
<style scoped></style>
