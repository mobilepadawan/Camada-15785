const ls = localStorage
const d = document

function buildDOM(elementoPadre, metatag) {
   const el = d.getElementById(elementoPadre)
         el.append(metatag)
}

const p = d.createElement("p")
      p.innerText = "Formulario de datos creado de forma dinámica."
      buildDOM("formulario", p)

const inputNombre = d.createElement("input")
      inputNombre.id = "nombre"
      inputNombre.type = "text"
      inputNombre.placeholder = "Ingrese su nombre"
      buildDOM("formulario", inputNombre)

const inputEdad = d.createElement("input")
      inputEdad.id = "edad"
      inputEdad.type = "number"
      inputEdad.placeholder = "0 a 120 años"
      buildDOM("formulario", inputEdad)

      const inputEmail = d.createElement("input")
      inputEmail.id = "email"
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
      //buttonGuardar.setAttribute("class", "btn blue white-text, waves-effect waves-light")
      buttonGuardar.onclick = guardarDatos
      buildDOM("formulario", buttonGuardar)

      function guardarDatos() {
         //debugger
         const camposFormulario = {nombre: "", edad: 0, email: ""}
               camposFormulario.nombre = inputNombre.value 
               camposFormulario.edad = inputEdad.value 
               camposFormulario.email = inputEmail.value
               localStorage.setItem("camposFormulario", JSON.stringify(camposFormulario))
      }

      function recuperarDatos() {
         //debugger
         if (localStorage.camposFormulario != undefined) {
            const camposFormulario = JSON.parse(localStorage.getItem("camposFormulario"))
                  inputNombre.value = camposFormulario.nombre
                  inputEdad.value = camposFormulario.edad
                  inputEmail.value = camposFormulario.email
         }
      }

      d.body.onload = recuperarDatos
      d.title = "HTML generado desde JS"


//COMO USAR GETELEMENTSBYTAGNAME
      // const paragraph = d.getElementsByTagName("p")
      //       for (let l of paragraph) {
      //          debugger
      //          l.classList.add("red")
      //       }

//COMO USAR QUERYSELECTOR()
// const titulo = d.querySelector("h1")
//       titulo.innerText = "Nuevo Título de Formulario"

//REEMPLAZAR GETELEMENTSBYTAGNAME POR QUERYSELECTORALL()
      // const paragraph = d.querySelectorAll("p")
      //       for (let l of paragraph) {
      //          debugger
      //          l.classList.add("red")
      //       }