let productos = []
const tableBody = $("tbody")
const productoDesc = $("#descripcion")
const cantidadPlazas = $("#cantidad")

//$("h1").css("font-size", "30px")
$("h1").css({"font-size": "30px",
            "text-decoration": "underline"})


// "[{"pid":1,"producto":"Curso JavaScript","cantidad":90},{"pid":2,"producto":"Curso React","cantidad":100},{"pid":3,"producto":"Curso Node JS","cantidad":120}]"

const creoFilaProducto =(producto) => { //Creo la fila en la tabla listadoProductos
    const fid = (`fila${producto.pid}`).trim() //Creo un atributo ID dinámico para <tr>
    const fila = `<tr id="${fid}" style="display: none;">
                     <td>${producto.pid}</td>
                     <td>${producto.producto}</td>
                     <td class="right">${producto.cantidad}</td>
                     <td class="center"><button onclick="eliminarFilaYproducto('${fid}', '${producto.pid}')" class="btn-small btn-floating red waves-effect waves-light"><i class="material-icons">delete</i></button></td>
                 </tr>`
    tableBody.append(fila)
    $(`#${fid}`).show(500)
}

const eliminarFilaYproducto = (fid, pid) => {
    productos.splice(pid - 1, 1)
    $(`#${fid}`).hide(2000, ()=> {
        $(`#${fid}`).remove()
        console.warn(`${fid} fue eliminado.`)
    })
    //guardarProductosEnLS()
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

const guardarProductosEnLS = ()=> {
    if (productos.length > 0)
        localStorage.cursos = JSON.stringify(productos)
}

const recuperarProductosDeLS = ()=> {
    if (localStorage.cursos != undefined)
        productos = JSON.parse(localStorage.cursos)
}

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





// const animarTitulo = ()=> {
//     $("h1").fadeOut(1000, ()=> {
//         $("h1").fadeIn(2000)
//     })
// }