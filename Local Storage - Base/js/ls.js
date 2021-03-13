const ls = localStorage
let nombre = ""
let edad = ""
let email = ""

let miSObjetoJSON = {}

function guardoElementos() {
   const miUsuario = {nombre: "", edad: 0, email: ""}
         miUsuario.nombre = prompt("Ingrese su nombre: ")
         miUsuario.edad = prompt("Ingrese su edad: ")
         miUsuario.email = prompt("Ingrese su email: ")
         
         contenido = JSON.stringify(miUsuario)
         debugger
         localStorage.setItem("miUsuario", contenido)
   // nombre = prompt("Ingrese su nombre: ")
   // edad = prompt("Ingrese su edad: ")
   // email = prompt("Ingrese su email: ")
   // if (nombre != "" && edad != "" && email != "") {
   //    ls.setItem("nombre", nombre)
   //    ls.setItem("edad", edad)
   //    ls.setItem("email", email)
   //    console.info("se almacenaron los datos de forma local.")   
   // }
}

function listarLS() {
   console.log(ls.getItem("nombre"))
   console.log(ls.getItem("edad"))
   console.log(ls.getItem("email"))
}

function listarLS2() {
   debugger
   for (let i = 0; i < ls.length; i++) {
      clave = (ls.key(i))
      console.log(clave + ": " + ls.getItem(clave))
   }
}

function eliminarItem() {
   clave = prompt("Ingrese la CLAVE a eliminar.")
   if (clave != "") {
      ls.removeItem(clave)
   }
}

