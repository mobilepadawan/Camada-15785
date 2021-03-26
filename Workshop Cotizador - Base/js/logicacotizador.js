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
//Inicializo el objeto cotizador
objCotizar = new cotizadorSeguroDeHogar(jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, areaResidencia.value, tipoVivienda.value, parseInt(metros2.value))

//lleno los combo select apenas inicia el documento HTML
cargoElementoSelect(areaResidencia, jsonAREA)
cargoElementoSelect(tipoVivienda, jsonTIPOVIVIENDA)

function cotizar() {
   importeCuota.innerText = `$ ${objCotizar.calculoCuota()}`
}

btnCotizar.addEventListener("click", cotizar)