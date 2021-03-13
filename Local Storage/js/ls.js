const ls = localStorage
let nombre = ""
let edad = ""
let email = ""

function guardoElementos() {
   nombre = prompt("Ingrese su nombre: ")
   edad = prompt("Ingrese su edad: ")
   email = prompt("Ingrese su correo electrónico: ")

   if (nombre != "" && edad != "" && email != "") {
      ls.setItem("nombre", nombre)
      ls.setItem("edad", edad)
      ls.setItem("email", email)
      console.info("Se guardaron los elementos en Local Storage")
   }
}

function listarLS() {
   console.log(ls.getItem("nombre"))
   console.log(ls.getItem("edad"))
   console.log(ls.getItem("email"))
}

//Alternativa
function listarLS2() {
   debugger
   for (let i = 0; i < ls.length; i++) {
      clave = (ls.key(i))
      console.log(clave + ": " + ls.getItem(clave))
   }
}

//Eliminar un ítem
function eliminarItem() {
   clave = prompt("Ingrese la Clave a eliminar: ")
   if (clave != "") {
      ls.removeItem(clave)
   }
}






//QUE ES JSON
const miProducto = {descripcion: "", stock: 0, precio: 0}

const cargoJSON = () => {
      miProducto.descripcion = prompt("Ingrese descripción del producto: ")
      miProducto.stock = parseInt(prompt("Ingrese stock del producto: "))
      miProducto.precio = parseFloat(prompt("Ingrese precio del producto: "))
      //ls.miProducto = miProducto //Mostrar qué pasa, luego corregir
      ls.miProducto = JSON.stringify(miProducto)
}

const restauroJSON = () => {
      miNuevoProducto = JSON.parse(ls.miProducto)
      console.table(miNuevoProducto)
}