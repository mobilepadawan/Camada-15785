// //OPERACIONES SOBRE ARRAYS
const paises = ["Argentina", "Uruguay", "Chile", "Brasil", "Perú", "Bolivia", "Paraguay", "Colombia", "Venezuela", "Ecuador"] //para usar con concat()

//["A", "Ante", "Bajo", "Cabe", "Con", "Contra", "De", "Desde", "En", "Entre", "Hacia", "Hasta", "Para", "Por", "Según", "Sin", "So", "Sobre", "Tras"]

let elementos = []

function cargoNuevoElemento() {
    elementos.push(prompt("Ingrese un nuevo elemento: "))
}

function listarElementos() {
    document.getElementById("listaElementos").innerHTML = ""
    for (let e of elementos) {
        document.getElementById("listaElementos").innerHTML += `<li>${e}</li>`       //"<li>" + e + "</li>"
    }
}

//ARRAY DE OBJETOS
function altaDeNuevoProducto() {
    const nuevoProducto = {productoid: 0, nombre: "", stock: 0, precio: 0}
            nuevoProducto.productoid = Number(misProductos.length + 1)
            nuevoProducto.nombre = prompt("Ingrese el nombre del producto nuevo: ")
            nuevoProducto.stock = parseInt(prompt("Ingrese el stock inicial: "))
            nuevoProducto.precio = parseFloat(prompt("Ingrese el precio de venta: "))
            misProductos.push(nuevoProducto)
}








let misProductos = [{productoid: 1, nombre: "Macbook Air", stock: 30, precio: 950},
                    {productoid: 2, nombre: "EXO i3", stock: 10, precio: 1105},
                    {productoid: 3, nombre: "Lenovo i7", stock: 22, precio: 1200},
                    {productoid: 4, nombre: "Dell Vostro", stock: 15, precio: 975},
                    {productoid: 5, nombre: "Microsoft Surface", stock: 21, precio: 1420}]
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iPad Pro 12", stock: 60, precio: 1250}
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 21", stock: 35, precio: 1075}
                    //nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 27", stock: 18, precio: 1300}
                    //misProductos.push(nuevoProducto) //agrega el nuevo producto al array misProductos


//ejemplo find(p => p.nombre.includes("iPad"))

//ejemplo filter(p => p.nombre.includes("iMac"))

// ejemplo filter(p => p.precio < 1000)

//ejemplo map(p => p.nombre.stock = Number(p.nombre.stock * 1.15).toFixed(2))

//SI NO QUIEREN PERDER LO CARGADO localStorage.misProductos = JSON.stringify(misProductos)