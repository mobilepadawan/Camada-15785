//EJEMPLO APLICADO: BUSCANDO Y FILTRANDO OBJETOS
let misProductos = [{productoid: 1, nombre: "Macbook Air", stock: 30, precio: 950},
                    {productoid: 2, nombre: "EXO i3", stock: 10, precio: 1105},
                    {productoid: 3, nombre: "Lenovo i7", stock: 22, precio: 1200},
                    {productoid: 4, nombre: "Dell Vostro", stock: 15, precio: 975},
                    {productoid: 5, nombre: "Microsoft Surface", stock: 21, precio: 1420}]
//nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iPad Pro 12", stock: 60, precio: 1250}
//nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 21", stock: 35, precio: 1075}
//nuevoProducto = {productoid: (misProductos.length + 1), nombre: "iMac 27", stock: 18, precio: 1300}
//misProductos.push(nuevoProducto) //agrega el nuevo producto al array misProductos

//misProductos.filter(producto => producto.nombre.includes("Mac")) //se guarda en un nuevo array, el array de objetos como resultado

//misProductos.find() Misma estructura que arriba, pero devuelve solo la primera coincidencia

//miIndice = misProductos.findIndex(p => p.nombre.includes("Lenovo")) Devuelve el index del array acorde al parámetro buscado

/*
aEliminar = misProductos.findIndex(p => p.nombre == "Lenovo i7") //identifico el array del producto que quiero elimninar y lo guardo en una variabl
            misProductos.splice(aEliminar, 1) //elimino el array detectado anteriormente 
*/

//OPERACIONES SOBRE ARRAYS
let paises = ["Argentina", "Uruguay", "Chile", "Brasil", "Perú", "Bolivia"]
// paises2 = ["Paraguay", "Colombia", "Venezuela"] //para usar con concat()
let listado = document.getElementById("listado")
listado.innerHTML = ""
for (let p in paises) { //si existen <li> previamente cargados, hay que borrarlos previamente
    listado.innerHTML += "<li>" + paises[p] + "</li>"
}

//Diferentes métodos a aplicar sobre el array de elementos
//.length     //total de elementos
//.indexOf()  //me devuelve el index de acuerdo a une elemento buscado entre paréntesis
//.split()    //Parte un array
//.join()     //Une los elementos de un array en una variable, a través de un caracter separador, ej: " - "
//.filter()   //Filtra elementos de un array
//.find()     //Encuentra un elemento en el array
//.concat()   //unifica dos arrays en uno solo
//.slice()    //Parte un array en uno nuevo, desde un índice específico, hasta el índice final
//.splice()   //Elimina un elemento (o varios) del array, especificando un índice hasta el índice final
//.sort()     //Ordena de forma ascendente los elementos del array
//.sort().reverse() //Ordena de forma descendente los elementos del array