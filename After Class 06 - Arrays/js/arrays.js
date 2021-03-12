// //OPERACIONES SOBRE ARRAYS
// let paises = ["Argentina", "Uruguay", "Chile", "Brasil", "Perú", "Bolivia"]
// let paises2 = ["Paraguay", "Colombia", "Venezuela", "Ecuador"] //para usar con concat()

// let listado = document.getElementById("listado")
// listado.innerHTML = ""
// for (let p in paises) { //si existen <li> previamente cargados, hay que borrarlos previamente
//     listado.innerHTML += `<li>${paises[p]}</li>`
// }
const productoNombre = document.getElementById("productoNombre")
const productoStock = document.getElementById("productoStock")
const productoPrecio = document.getElementById("productoPrecio")
const ls = localStorage

let misProductos = [{productoid: 1, nombre: "Macbook Air", stock: 30, precio: 950},
                    {productoid: 2, nombre: "EXO i3", stock: 10, precio: 1105},
                    {productoid: 3, nombre: "Lenovo i7", stock: 22, precio: 1200},
                    {productoid: 4, nombre: "Dell Vostro", stock: 15, precio: 975},
                    {productoid: 5, nombre: "Microsoft Surface", stock: 21, precio: 1420}]
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iPad Pro 12", stock: 60, precio: 1250}
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 21", stock: 35, precio: 1075}
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 27", stock: 18, precio: 1300}
                    //misProductos.push(nuevoProducto) //agrega el nuevo producto al array misProductos
