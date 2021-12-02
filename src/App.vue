<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>Registro de productos</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({})
}
</script>
