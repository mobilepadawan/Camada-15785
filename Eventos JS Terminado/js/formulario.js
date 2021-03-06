let nombre = document.getElementById("nombre")
let fnac = document.getElementById("fnac")
let email = document.getElementById("email")
let btnEnviar = document.getElementById("btnEnviar")
let datosDeForm = {nombre: "", fecha: "", email: ""}

function foco(campo) {campo.style.backgroundColor = "greenyellow"}

function normal(campo) {campo.style.backgroundColor = "white"}

nombre.addEventListener("focus", () => foco(nombre))
fnac.addEventListener("focus", () => foco(fnac))
email.addEventListener("focus", () => foco(email))

nombre.addEventListener("blur", () => normal(nombre))
fnac.addEventListener("blur", () => normal(fnac))
email.addEventListener("blur", () => normal(email))

nombre.addEventListener("change", () => {guardoDatosCargados()})
fnac.addEventListener("change", () => {guardoDatosCargados()})
email.addEventListener("change", () => {guardoDatosCargados()})

const guardoDatosCargados = () => { //cuando se ejecuta CHANGE, llama a esta función,arma el JSON y lo guarda en LocalStorage
      datosDeForm.nombre = nombre.value 
      datosDeForm.fecha = fnac.value
      datosDeForm.email = email.value 
      localStorage.datosDeForm = JSON.stringify(datosDeForm)   
}

nombre.addEventListener("keyup", () => capturoTecla(event))
fnac.addEventListener("keyup", () => capturoTecla(event))
email.addEventListener("keyup", () => capturoTecla(event))

const capturoTecla = (e) => {
   console.log(e)
   // if (e.key == "Enter") {
   // }   
}


window.addEventListener("offline", () => { //sin internet
   console.error("Se cayó internet X(")
   btnEnviar.classList.add("disabled")
})

window.addEventListener("online", () => {//volvió internet
   console.warn("Volvio internet =)")
   btnEnviar.classList.remove("disabled")
})