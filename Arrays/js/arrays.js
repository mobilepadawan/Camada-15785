//EJEMPLO APLICADO: BUSCANDO Y FILTRANDO OBJETOS
let misProductos = [{productoid: 1, nombre: "Macbook Air", stock: 30, precio: 950},
                    {productoid: 2, nombre: "EXO i3", stock: 10, precio: 1105},
                    {productoid: 3, nombre: "Lenovo i7", stock: 22, precio: 1200},
                    {productoid: 4, nombre: "Dell Vostro", stock: 15, precio: 975},
                    {productoid: 5, nombre: "Microsoft Surface", stock: 21, precio: 1420}]
//nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iPad Pro 12", stock: 60, precio: 1250}
//nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 21", stock: 35, precio: 1075}
//nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 27", stock: 18, precio: 1300}
//.push()

//.filter()
//.find()
//.findIndex()

//miIndice = misProductos.findIndex(p => p.nombre.includes("Lenovo"))
//misFiltros = misProductos.filter(p => p.nombre.includes("Mac"))
//aEliminar = misProductos.findIndex(p => p.nombre == "Lenovo i7")
//            misProductos.splice(aEliminar, 1)

//OPERACIONES SOBRE ARRAYS
let paises = ["Argentina", "Uruguay", "Chile", "Brasil", "Perú", "Bolivia"]
// paises2 = ["Paraguay", "Colombia", "Venezuela"] //para usar con concat()

let listado = document.getElementById("listado")
listado.innerHTML = ""
for (let p in paises) { listado.innerHTML += "<li>" + paises[p] + "</li>" }

//.length
//.indexOf()
//.split()
//.join()
//.filter()
//.find()
//.concat()
//.slice()
//.splice()
//.sort()
//.sort().reverse()

//Si queda tiempo, ver los métodos incluidos en las variables