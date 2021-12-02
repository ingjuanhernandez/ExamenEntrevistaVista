<template>
  <div class="pa-10">
    <v-data-table
      class="table ma-auto"
      fixed-header
      fixed-footer
      :headers="headers"
      :items="Productos"
      height="500"
      multi-sort
      style="width: 100%"
    >
      <template v-slot:[`item.nombre`]="{ item }" class="pa-0">
        <v-btn
          color="red"
          text
          :title="`Borrar ${item.nombre}`"
          @click="BorrarProducto(item)"
          ><v-icon>mdi-trash-can-outline</v-icon></v-btn
        >
        <span class="caption text-uppercase">
          <v-btn text @click="ActualizarProducto(item)">
            {{ item.nombre }}</v-btn
          >
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true
  }),
  computed: {
    headers() {
      return [
        { text: 'Id', value: 'id' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Precio', value: 'precio' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Descripción', value: 'descripcion' }
      ]
    },
    Productos() {
      return this.$store.getters.ObtenerProductos
    }
  },
  methods: {
    ActualizarProducto(item) {
      this.$store.dispatch('SetProducto', item)
    },
    BorrarProducto(item) {
      this.$store.dispatch('BorrarProducto', item.id).then(() => {
        this.$store.dispatch('ObtenerProductos')
      })
    }
  },
  created() {
    this.$store.dispatch('ObtenerProductos')
  }
}
</script>

<style scoped></style>
