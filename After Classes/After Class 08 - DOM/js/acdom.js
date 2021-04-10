//DECLARACIÓN DE VARIABLES
const encabezado = document.getElementById("encabezado")

//Creo el título 1
const titulo1 = document.createElement("h1")
      titulo1.innerText = "After Class 08 - DOM"
      titulo1.classList.add("blue-text")
      construirDOM(titulo1, encabezado)

//Creo el título 2
const titulo2 = document.createElement("h2")
      titulo2.innerText = "Estamos repasando el DOM JavaScript, para manipular HTML y crearlo, todo desde JS."
      titulo2.classList.add("orange-text")
      construirDOM(titulo2, encabezado)
//Creo la imagen
const imagen = document.createElement("img")
      imagen.src = "images/javascript.png"
      construirDOM(imagen, encabezado)

//FUNCIÓN QUE CONSTRUYE EL DOM
function construirDOM(elemento, ubicacion) {
    ubicacion.appendChild(elemento)
}

//Si quiero borrar primero el contenido de 'encabezado' previamente cargado, antes de generar el contenido desde JS, ejecuto:
//encabezado.innerHTML = ""

//MANIPULACIÓN DE CAMPOS DE FORMULARIO
const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const email = document.getElementById("email")
const btnEnviar = document.getElementById("btnEnviar")

//Así le asignamos valores a los campos de FORM existentes
nombre.value = "Fernando"
edad.value = 45
email.value = "fer@nando.net"



//Así levantamos los valores cargados en dichos campos
function envioDatos() {
    let informacion = {nombre: "", edad: 0, email: ""}
        informacion.nombre = nombre.value
        informacion.edad = edad.value
        informacion.email = email.value
        console.table(informacion)
}

btnEnviar.onclick = envioDatos

//Tenemos un array de datos, y queremos cargarlo en una tabla HTML
//analizamos primero la tabla en index HTML
//capturamos el id del apartado <tbody>
const listadoCursos = document.getElementById("listadoCursos")

//Recorro el array de datos CURSOS 
const cargarCursos = () => {
    for (curso of CURSOS) {
        //pruebo que funcione el ciclo for()
        //console.table(curso)

        //Capturo el HTML de una fila
        //reemplazo título en <td> por curso
        let fila = `<tr>
                        <td>${curso.nombre}</td>
                        <td>$ ${curso.precio}</td>
                    </tr>`
        listadoCursos.innerHTML += fila
        //Como se suma a lo que había, debo limpiar previamente listadoCursos
        //antes del ciclo for() listadoCursos.innerHTML = ""
    }
}