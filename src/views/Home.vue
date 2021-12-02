<template>
  <div>
    <formulario-registro class="pb-2"></formulario-registro>
    <v-divider></v-divider>
    <Data></Data>
  </div>
</template>

<script>
import FormularioRegistro from '../components/FormularioRegistro.vue'
import Data from '../components/Data.vue'
export default {
  name: 'Home',
  components: {
    FormularioRegistro,
    Data
  },
  methods: {}
}
</script>
