class cotizadorSeguroDeHogar {
   constructor (jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, residenciaElegida, viviendaElegida, metros2) {
      let areaResidencia = jsonAREA
      let tipoVivienda = jsonTIPOVIVIENDA
      let costoM2 = costoSeguroM2
      let metrosCuadradosIngresados = metros2
      let areaResidenciaElegida = residenciaElegida
      let tipoViviendaElegida = viviendaElegida
      this.calculoCobertura = () => {
         return (costoM2 * metrosCuadradosIngresados)
      }

      this.factorArea = () => {
         let r = areaResidencia.find(r => r.area == areaResidenciaElegida)
            return r.factor 
      }

      this.factorVivienda = () => {
         let r = tipoVivienda.find(v => v.tipo == tipoViviendaElegida)
         return r.factor 
      }

      this.calculoCuota = () => {
         
         let valorDeCuota = this.calculoCobertura() * this.factorArea() * this.factorVivienda()
            if (typeof valorDeCuota != "number")
               valorDeCuota = 0.00
         return valorDeCuota.toFixed(2)
      }
   }
}