<!--
Path: src/App.vue
Este componente se encarga de mostrar el encabezado de la aplicación.
-->

<template>
  <div>
    <AppHeader />
    <NetworkCheck />
    <ListadoPrecios />
  </div>
</template>

<script>
import NetworkCheck from './components/NetworkCheck.vue';
import AppHeader from './components/AppHeader.vue';
import ListadoPrecios from './components/ListadoPrecios.vue';

export default {
  name: 'App',
  components: {
    NetworkCheck,
    AppHeader,
    ListadoPrecios
  }
};
</script>
