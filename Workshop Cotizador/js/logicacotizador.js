//Creamos función genérica con dos parámetros:
//1) el elemento HTML Select donde quiero cargar los datos del array
//2) el array que deseo recorrer y cargar sus elementos en un Select
function cargoElementoSelect(combo, arrayElementos) {
    if (arrayElementos.length > 0) {
        let elementosOption = ""
            for (let elemento of arrayElementos) {
                if (elemento.area != undefined) {
                    elementosOption += `<option>${elemento.area}</option>`
                } else {
                    elementosOption += `<option>${elemento.tipo}</option>`
                }
            }
            combo.innerHTML = elementosOption
    }
}

cargoElementoSelect(areaResidencia, jsonAREA) //incovamos nuestra función con los parámetros
cargoElementoSelect(tipoVivienda, jsonTIPOVIVIENDA) //necesarios para que cargue ambos arrays

//Creamos la función Cotizar, que luego se invoca desde el onclick de btnCotizar
//Nos aseguramos que el usuario seleccione datos de los combos y cargue MT2
//para recién poder hacer el cálculo de cotización pertinente
function cotizar() {
    if ((areaResidencia.value.trim() === "" || tipoVivienda.value.trim() === "") || metros2.value === "") {
        mensaje = "Seleccione un área de residencia, tipo de vivienda, e indique los Metros(2) para poder cotizar."
        clasesCSS = "red darken-3 white-text"
        M.toast({html: mensaje, classes: clasesCSS}) //puede ser un alert() también.
    } else {
        objCotizar = new cotizadorSeguroDeHogar(jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, areaResidencia.value, tipoVivienda.value, Number(metros2.value))
        importeCuota.innerText = `$ ${objCotizar.calculoCuota()}`
    }
}

btnCotizar.addEventListener("click", cotizar)