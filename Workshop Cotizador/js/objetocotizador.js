class cotizadorSeguroDeHogar {
    constructor (jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, residenciaElegida, viviendaElegida, metros2) {
        let areaResidencia = jsonAREA
        let tipoVivienda = jsonTIPOVIVIENDA
        let costoM2 = costoSeguroM2
        let metrosCuadradosIngresados = metros2
        this.areaResidenciaElegida = residenciaElegida
        this.tipoViviendaElegida = viviendaElegida
        this.calculoCobertura = function() { //Obtenemos el precio de la cuota en bruto
            return (costoM2 * metrosCuadradosIngresados)
        }
        this.factorArea = function() {
            let far = 1
            for (let i in areaResidencia) {
                if (this.areaResidenciaElegida == areaResidencia[i].area) {
                    far = areaResidencia[i].factor
                    break
                }
            }
            return far
        }
        this.factorVivienda = function() {
            let fv = 1
            for (let i in tipoVivienda) {
                if (this.tipoViviendaElegida == tipoVivienda[i].tipo) {
                    fv = tipoVivienda[i].factor
                    break
                }
            }
            return fv
        }
        this.calculoCuota = function() {
            let valorDeCuota = this.calculoCobertura() * this.factorArea() * this.factorVivienda()
                if (typeof valorDeCuota != "number") {
                    valorDeCuota = 0.00
                }
                return valorDeCuota.toFixed(2)
            }
    }
}
//Creamos nuestra clase Cotizador de seguro de hogar
//Recibe el JSON de área de residencia, el JSON de tipo de vivienda, la constante con el valor del seguro x MT2
//el dato de residencia que selecciona el usuario, el dato de la vivienda que selecciona el usuario
//y finalmente los metros cuadrados de la vivienda que el usuario ingresó.
//Todo esto lo acomoda en propiedades pùblicas y privadas, según lo que definimos
//Luego creamos una serie de métodos que devuelven valores numéricos
//calculoCobertura() nos devuelve el bruto de costoXMT2 multiplicado por los M2 que el usuario ingresó
//factorArea() nos devuelve el factor multiplicador de porcentaje, acorde al àrea seleccionada x el usuario
//factorVivienda() nos devuelve el factor multiplicador de porcentaje, acorde al tipo de vivienda seleccionada x el usuario
//calculoCuota() multiplica los tres métodos anteriores, para darnos el costo de la cuota final, mensual