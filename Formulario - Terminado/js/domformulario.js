const d = document

function buildDOM(elementoPadre, metatag) {
   //debugger
   const el = d.getElementById(elementoPadre)
         el.appendChild(metatag)
}

const inputNombre = d.createElement("input")
      inputNombre.id ="nombre"
      inputNombre.type = "text"
      inputNombre.placeholder = "Ingrese su nombre"
      buildDOM("formulario", inputNombre)

const inputEdad = d.createElement("input")
      inputEdad.id ="edad"
      inputEdad.type = "number"
      inputEdad.placeholder = "Ingrese su edad"
      buildDOM("formulario", inputEdad)

const inputEmail = d.createElement("input")
      inputEmail.id ="email"
      inputEmail.type = "email"
      inputEmail.placeholder = "Ingrese su correo electrónico"
      buildDOM("formulario", inputEmail)

      const buttonGuardar = d.createElement("button")
            buttonGuardar.id = "btnGuardar"
            buttonGuardar.innerText = "GUARDAR"
            buttonGuardar.classList.add("btn")
            buttonGuardar.classList.add("blue")
            buttonGuardar.classList.add("white-text")
            buttonGuardar.classList.add("waves-effect")
            buttonGuardar.classList.add("waves-light")
            buildDOM("formulario", buttonGuardar)

            buttonGuardar.onclick = guardarDatos

function guardarDatos() {
   const camposForm = {nombre: "", edad: 0, email: ""}
         camposForm.nombre = inputNombre.value
         camposForm.edad = inputEdad.value 
         camposForm.email = inputEmail.value
         localStorage.setItem("camposForm", JSON.stringify(camposForm))
}

function recuperarDatos() {
   if (localStorage.camposForm != undefined) {
      const camposForm = JSON.parse(localStorage.getItem("camposForm"))
            inputNombre.value = camposForm.nombre
            inputEdad.value = camposForm.edad
            inputEmail.value = camposForm.email
   }
}

d.body.onload = recuperarDatos
d.title = "HTML generado desde JS"


const camposForm = {nombre: "Fernando", edad: 45, email: "fer@nando.net"}

let li = `<li>${camposForm.nombre}</li>
          <li>${camposForm.edad}</li>
          <li>${camposForm.email}</li>
`

const listado = d.getElementById("listado")
      listado.innerHTML = li 