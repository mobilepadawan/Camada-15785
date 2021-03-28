const PLANES = [{planid: 1, cardID: "planBronze", nombre: "Plan Bronze", infoA: "Landing page", infoB: "Sitio de una sección", infoC: "Dominio gratuito", precio: 4500},
               {planid: 2, cardID: "planGold", nombre: "Plan Gold", infoA: "Landing page", infoB: "Sitio de hasta diez secciones", infoC: "Dominio gratuito",precio: 12500},
               {planid: 3, cardID: "planSilver", nombre: "Plan Silver", infoA: "Landing page", infoB: "Sitio de hasta tres secciones", infoC: "Dominio gratuito", precio: 8500}]

function cargoCards() {
   cardsPlanes.innerHTML = ""
   for (let plan of PLANES) {
       let card = `<div class="col-lg-4 box">
                       <h3>${plan.nombre}</h3>
                       <h4>$ ${plan.precio}<span>[única vez]</span></h4>
                       <ul>
                         <li class=" pricing__box--list"><i class="bx bx-check"></i>${plan.infoA}</li>
                         <li class=" pricing__box--list"><i class="bx bx-check"></i>${plan.infoB}</li>
                         <li class=" pricing__box--list"><i class="bx bx-check"></i>${plan.infoC}</li>
                       </ul>
                       <button class="get-started-btn" onclick="guardoPlan(${plan.planid})">¡LO QUIERO!</a>
                   </div>`
                   cardsPlanes.innerHTML += card
   }
}

//CREO BOTON PARA INTERACTUAR Y GUARDAR DATOS EN STORAGE
function guardoPlan(PLANES) {
   localStorage.clear()
   let planElegido = {nombre: "", precio: 0, ID: 0}
   planElegido.nombre = PLANES.nombre
   planElegido.precio = PLANES.precio
   planElegido.ID = PLANES.planid
   contein = JSON.stringify(planElegido)
   localStorage.setItem("planElegido", contein)
   console.log(planElegido)
}

const cardsPlanes = document.getElementById("cardsPlanes")
//const btnLoQuiero = document.getElementsByTagName("button")

document.addEventListener("DOMContentLoaded", cargoCards)