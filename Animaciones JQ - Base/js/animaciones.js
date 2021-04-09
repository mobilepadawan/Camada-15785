let productos = []
const tableBody = $("tbody")
const productoDesc = $("#descripcion")
const cantidadPlazas = $("#cantidad")
// "[{"pid":1,"producto":"Curso JavaScript","cantidad":90},{"pid":2,"producto":"Curso React","cantidad":100},{"pid":3,"producto":"Curso Node JS","cantidad":120}]"

const creoFilaProducto =(producto) => { //Creo la fila en la tabla listadoProductos
    const fid = (`fila${producto.pid}`).trim() //Creo un atributo ID dinámico para <tr>
    const fila = `<tr id="${fid}">
                     <td>${producto.pid}</td>
                     <td>${producto.producto}</td>
                     <td class="right">${producto.cantidad}</td>
                     <td class="center"><button class="btn-small btn-floating red waves-effect waves-light"><i class="material-icons">delete</i></button></td>
                 </tr>`
    tableBody.append(fila)
}

const generoID = ()=> (productos.length + 1) //ID dinámico generado en base al total de elementos en array

const agregarProducto =()=> { //Agrego el producto al array JSON
    if (productoDesc.val().trim() != "" && Number(cantidadPlazas.val()) > 0) {
        const nuevoProducto = {
                                pid: generoID(), 
                                producto: productoDesc.val(),
                                cantidad: Number(cantidadPlazas.val())
                              }
        productos.push(nuevoProducto)
        guardarProductosEnLS()
        $(":input").val("") //Aprovecho el selector :input, para vaciar todos los campos de una sola vez
        creoFilaProducto(nuevoProducto)
        console.info(`Se agregó el producto '${nuevoProducto.producto}', exitosamente.`)
    } else {
        console.error("No hay contenido para agregar en 'productos' :/ ")
    }
}

const guardarProductosEnLS = ()=> { localStorage.cursos = JSON.stringify(productos) }

const recuperarProductosDeLS = ()=> {productos = JSON.parse(localStorage.cursos)}

const eliminarProducto =(pid)=> {productos.splice(pid)}

const actualizoTablaProductos = () => {
    if (productos.length > 0) {
        tableBody.html("")
        for (let p of productos) {
            creoFilaProducto(p)
        }
    }
}

$("#guardar").click(()=> {agregarProducto()})

$(()=> {
    recuperarProductosDeLS()
    actualizoTablaProductos()
})