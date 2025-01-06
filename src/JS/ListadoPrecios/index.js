// Path: src/JS/ListadoPrecios/index.js

export default {
    name: 'ListadoPrecios',
    data() {
      return {
        fechas: [],
        fechaSeleccionada: '',
        resultados: []
      };
    },
    methods: {
      async fetchFechas() {
        const response = await fetch('/api/fechas');
        this.fechas = await response.json();
        this.fechaSeleccionada = this.fechas[0]?.fecha_listado || '';
      },
      async filtrarPrecios() {
        const response = await fetch(`/api/precios?fecha=${this.fechaSeleccionada}`);
        this.resultados = await response.json();
      },
      calcularAnchoBobina(resultado) {
        return ((2 * resultado.ancho + 2 * resultado.fuelle + 30) / 10).toFixed(2);
      },
      calcularDesarrollo(resultado) {
        return ((resultado.alto + resultado.fuelle / 2 + 20) / 10).toFixed(2);
      },
      calcularPeso(resultado) {
        const anchoBobina = this.calcularAnchoBobina(resultado);
        const desarrollo = this.calcularDesarrollo(resultado);
        const superficie = (anchoBobina / 100) * (desarrollo / 100);
        return (superficie * resultado.gramaje).toFixed(1);
      }
    },
    async mounted() {
      await this.fetchFechas();
      await this.filtrarPrecios();
    }
  };