let productos = []
const tableBody = $("tbody")
const productoDesc = $("#descripcion")
const fechaInicio = $("#fechainicio")
const cantidadPlazas = $("#cantidad")

const creoFilaProducto =(producto) => {
    const fid = (`fila${producto.pid}`).trim() //Creo un atributo ID dinámico para <tr>
    const fila = `<tr id="${fid} style="display: none;">
                     <td>${producto.pid}</td>
                     <td>${producto.producto}</td>
                     <td>${producto.fechainicio}</td>
                     <td class="right">${producto.cantidad}</td>
                     <td class="center"><button onclick="eliminarFilaYproducto('${fid}', ${producto.pid})" class="btn-small btn-floating red waves-effect waves-light"><i class="material-icons">delete</i></button></td>
                 </tr>`
    tableBody.append(fila)
    $(`#${fid}`).show(300)
}

const generoID = ()=> (productos.length + 1)

const agregarProducto =()=> {
    if (productoDesc.val().trim() != "" && Number(cantidadPlazas.val()) > 0) {
        const nuevoProducto = {
                                pid: generoID(), 
                                producto: productoDesc.val(),
                                fechainicio: fechainicio.val(),
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

const eliminarFilaYproducto = (fid, pid) => {
    productos.splice(pid, 1)
    $(`#${fid}`).hide(2000, ()=> {
        $(`#${fid}`).remove()
        console.warn(`${fid} fue eliminado.`)
    })
}

const eliminarProducto =(pid)=> {
    productos.splice(pid)
}

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


class ProductoModel {
    constructor() {
        const productos = JSON.parse(localStorage.getItem('cursos')) || []
        this.productos = productos.map(producto => new ProductoModel(producto))
    }

    guardarProductos() {
        localStorage.setItem('cursos', JSON.stringify(this.productos))
    }

    agregarProducto(producto) {
        this.productos.push(new Producto(producto))
        this.guardarProductos()
    }
}

class ProductoView {
    listarProductos(padre, data) {
        let filasHtml = ''
        for (const producto of data) {
           filasHtml += `<tr id="${fid} style="display: none;">
                            <td>${data.pid}</td>
                            <td>${data.producto}</td>
                            <td>${data.fechainicio}</td>
                            <td class="right">${data.cantidad}</td>
                            <td class="center"><button onclick="eliminarFilaYproducto('${fid}', ${data.pid})" class="btn-small btn-floating red waves-effect waves-light"><i class="material-icons">delete</i></button></td>
                        </tr>`
        }
        $(padre).html(filasHtml)
    }
}

class ProductoController {
    constructor(productoModel, productoView) {
        this.productoModel = productoModel
        this.productoView = productoView
        this.productoView.agregarProducto('')
    }
}

