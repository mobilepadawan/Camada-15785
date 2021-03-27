let objCotizar = ""                                                 //Variable que usaremos con el OBJETO COTIZADOR
const areaResidencia = document.getElementById("areaResidencia")    //Combo Select RESIDENCIA
const tipoVivienda = document.getElementById("tipoVivienda")        //Combo Select TIPO DE VIVIENDA
const metros2 = document.getElementById("metros2")                  //Input METROS CUADRADOS DE LA PROPIEDAD
const importeCuota = document.getElementById("importeCuota")        //Label QUE MUESTRA EL VALOR DE LA CUOTA
const btnCotizar = document.getElementById("btnCotizar")            //BOTON QUE DISPARA LA COTIZACON




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