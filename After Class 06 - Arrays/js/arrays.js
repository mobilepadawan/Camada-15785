// //OPERACIONES SOBRE ARRAYS
const paises = ["Argentina", "Uruguay", "Chile", "Brasil", "Perú", "Bolivia", "Paraguay"]
const paises2 = ["Colombia", "Venezuela", "Ecuador"]

//["A", "Ante", "Bajo", "Cabe", "Con", "Contra", "De", "Desde", "En", "Entre", "Hacia", "Hasta", "Para", "Por", "Según", "Sin", "So", "Sobre", "Tras"]

const elementos = ["A", "Ante", "Bajo", "Cabe", "Con", "Contra", "De", "Desde", "En", "Entre", "Hacia", "Hasta", "Para", "Por", "Según", "Sin", "So", "Sobre", "Tras"]

function cargoNuevoElemento() {
   elementos.push(prompt("Ingrese un nuevo elemento: "))
   debugger
   listarElementos()
}

function listarElementos() {
   document.getElementById("listaElementos").innerHTML = ""
   for (let e of elementos) {
      document.getElementById("listaElementos").innerHTML += "<li>" + e + "</li>"
   }
}
















//ARRAY DE OBJETOS
let misProductos = [{productoid: 1, nombre: "Macbook Air", stock: 30, precio: 950},
                    {productoid: 2, nombre: "EXO i3", stock: 10, precio: 1105},
                    {productoid: 3, nombre: "Lenovo i7", stock: 22, precio: 1200},
                    {productoid: 4, nombre: "Dell Vostro", stock: 15, precio: 975},
                    {productoid: 5, nombre: "Microsoft Surface", stock: 21, precio: 1420}]
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iPad Pro 12", stock: 60, precio: 1250}
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 21", stock: 35, precio: 1075}
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 27", stock: 18, precio: 1300}
                    //misProductos.push(nuevoProducto) //agrega el nuevo producto al array misProductos

function altaDeNuevoProducto() {
   const nuevoProducto = {productoid: 0, nombre: "", stock: 0, precio: 0}
         nuevoProducto.productoid = parseInt(misProductos.length + 1)
         nuevoProducto.nombre = prompt("Nombre del nuevo Producto: ")
         nuevoProducto.stock = parseInt(prompt("Stock inicial: "))
         nuevoProducto.precio = parseFloat(prompt("Precio: "))
         misProductos.push(nuevoProducto)
         console.table(misProductos)
}