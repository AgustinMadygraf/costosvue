<!--
Path: src/components/ListadoPrecios.vue 

-->

<template>
    <div class="container">
      <h1 class="my-4">Listado de precios</h1>
  
      <form @submit.prevent="filtrarPrecios" class="mb-4">
        <div class="form-group">
          <label for="fechaSeleccionada">Selecciona una fecha:</label>
          <select v-model="fechaSeleccionada" id="fechaSeleccionada" class="form-control">
            <option 
              v-for="fecha in fechas" 
              :key="fecha.fecha_listado" 
              :value="fecha.fecha_listado"
            >
              {{ fecha.fecha_listado }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Filtrar</button>
      </form>
  
      <table class="table table-bordered table-responsive">
        <thead class="thead-light">
          <tr>
            <th>ID_formato</th>
            <th>Formato</th>
            <th>Color</th>
            <th>Gramaje</th>
            <th>Cantidad</th>
            <th>Precio Unitario s/IVA</th>
            <th>Ancho bolsas</th>
            <th>Fuelle bolsas</th>
            <th>Alto bolsas</th>
            <th>Ancho bobina papel [cm]</th>
            <th>Desarrollo [cm]</th>
            <th>Peso [gr]</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resultado in resultados" :key="resultado.ID_formato">
            <td>
              <a 
                :href="`/Bolsas/presupuesto.php?&vel=40&peso=${calcularPeso(resultado)}&precio_venta=${resultado.precio_u_sIVA}&formato=${resultado.formato}&ComVent=3`"
                target="_blank"
              >
                {{ resultado.ID_formato }}
              </a>
            </td>
            <td>{{ resultado.formato }}</td>
            <td>{{ resultado.color }}</td>
            <td>{{ resultado.gramaje }}</td>
            <td>{{ resultado.cantidad }}</td>
            <td>{{ resultado.precio_u_sIVA }}</td>
            <td>{{ resultado.ancho }}</td>
            <td>{{ resultado.fuelle }}</td>
            <td>{{ resultado.alto }}</td>
            <td>{{ calcularAnchoBobina(resultado) }}</td>
            <td>{{ calcularDesarrollo(resultado) }}</td>
            <td>{{ calcularPeso(resultado) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import ListadoPreciosScript from '@/JS/ListadoPrecios/index.js';
  
  export default {
    ...ListadoPreciosScript
  };
  </script>