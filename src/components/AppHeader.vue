<!--
Path: src/components/Header.vue
Este componente se encarga de mostrar el encabezado de la aplicación.
-->

<template>
    <div>
      <header>
        <br><br><br>
        <div class="topnav">
          <ul>
            <li v-for="(title, fileName) in navItems" :key="fileName">
              <a
                :href="`/Bolsas/${fileName}`"
                :class="{ active: paginaActual === `/Bolsas/${fileName}` }"
              >
                {{ title }}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        paginaActual: window.location.pathname,
        navItems: {
          "index": "Inicio",
          "asociados": "Asociados",
          "CostosOperativos": "Costos Operativos",
          "ventas": "Ventas",
          "stock": "Stock",
          "ListaPrecios": "Lista Precios",
          "manijas": "Manijas",
          // "valor_unitario": "Valor Unitario",
           "presupuesto": "Presupuesto",
          // "PuntoEquilibrio": "Punto de Equilibrio",
          "proveedores": "Proveedores",
          "../../horas/index": "Horas",
          "/DataMaq/index": "DataMaq",
          "/phpMyAdmin/": "PHP MyAdmin",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .topnav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .topnav li {
    margin: 0 10px;
  }
  
  .topnav a {
    text-decoration: none;
    color: #000;
  }

  
  .topnav a.active {
    font-weight: bold;
    color: #007bff;
  }
  </style>
  