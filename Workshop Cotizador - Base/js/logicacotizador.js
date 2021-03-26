//Crear una función genérica con dos parámetros

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

objCotizar = new cotizadorSeguroDeHogar(jsonAREA, jsonTIPOVIVIENDA, costoSeguroM2, areaResidencia.value, tipoVivienda.value, parseInt(metros2.value))


cargoElementoSelect(areaResidencia, jsonAREA)
cargoElementoSelect(tipoVivienda, jsonTIPOVIVIENDA)

function cotizar() {

   
   importeCuota.innerText = `$ ${objCotizar.calculoCuota()}`
}

btnCotizar.addEventListener("click", cotizar)