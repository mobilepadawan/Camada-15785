//Creamos función genérica con dos parámetros:
//1) el elemento HTML Select donde quiero cargar los datos del array
//2) el array que deseo recorrer y cargar sus elementos en un Select
function cargoElementoSelect(combo, arrayElementos) {
    if (arrayElementos.length > 0) {
        let elementos = ""
            for (let elemento of arrayElementos) {
                elementos += "<option>" + arrayElementos + "</option>"
            }
            combo.innerHTML = elementos
    }
}

cargoElementoSelect(areaResidencia, arrayResidencia) //incovamos nuestra función con los parámetros
cargoElementoSelect(tipoVivienda, arrayTipoVivienda) //necesarios para que cargue ambos arrays

//Creamos la función Cotizar, que luego se invoca desde el onclick de btnCotizar
//Nos aseguramos que el usuario seleccione datos de los combos y cargue MT2
//para recién poder hacer el cálculo de cotización pertinente
function cotizar() {
    if ((areaResidencia.value.trim() === "" || tipoVivienda.value.trim() === "") || metros2.value === "") {
        alert("Seleccione un área de residencia, un tipo de vivienda, e ingrese los Metros(2) de ésta última, para poder cotizar.")
    } else {
        objCotizar = new cotizadorSeguroDeHogar(jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, areaResidencia.value, tipoVivienda.value, Number(metros2.value))
            importeCuota.innerText = "$ " + objCotizar.calculoCuota()
    }
}

btnCotizar.addEventListener("click", cotizar)