let objCotizar="";const areaResidencia=document.getElementById("areaResidencia"),tipoVivienda=document.getElementById("tipoVivienda"),metros2=document.getElementById("metros2"),importeCuota=document.getElementById("importeCuota"),btnCotizar=document.getElementById("btnCotizar");function cargoElementoSelect(e,t){if(t.length>0){let o="";for(let e of t)null!=e.area?o+=`<option>${e.area}</option>`:o+=`<option>${e.tipo}</option>`;e.innerHTML=o}}function cotizar(){importeCuota.innerText=`$ ${objCotizar.calculoCuota()}`}objCotizar=new cotizadorSeguroDeHogar(jsonAREA,jsonTIPOVIVIENDA,costoSeguroM2,areaResidencia.value,tipoVivienda.value,parseInt(metros2.value)),cargoElementoSelect(areaResidencia,jsonAREA),cargoElementoSelect(tipoVivienda,jsonTIPOVIVIENDA),btnCotizar.addEventListener("click",cotizar);