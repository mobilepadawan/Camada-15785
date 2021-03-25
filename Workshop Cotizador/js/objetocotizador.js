class cotizadorSeguroDeHogar {
    constructor (jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, residenciaElegida, viviendaElegida, metros2) {
        let areaResidencia = jsonAREA
        let tipoVivienda = jsonTIPOVIVIENDA
        let costoM2 = costoSeguroM2
        let metrosCuadradosIngresados = metros2
        let areaResidenciaElegida = residenciaElegida
        let tipoViviendaElegida = viviendaElegida
        this.calculoCobertura = function() { //Obtenemos el precio de la cuota en bruto
            return (costoM2 * metrosCuadradosIngresados)
        }
        this.factorArea = function() {
            let r = areaResidencia.find(r => r.area == areaResidenciaElegida)
                return r.factor
        }
        this.factorVivienda = function() {
            let r = tipoVivienda.find(r => r.tipo == tipoViviendaElegida)
                return r.factor
        }
        this.calculoCuota = function() {
            let valorDeCuota = this.calculoCobertura() * this.factorArea() * this.factorVivienda()
                if (typeof valorDeCuota != "number")
                    valorDeCuota = 0.00
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