// CLASE PRODUCTO
class Producto {
    //CONSTRUCTOR DE CLASE PRODUCTO
    constructor(data) {
        this.id = data.id
        this.nombre = data.nombre.toUpperCase()
        this.precio = parseFloat(data.precio)
        this.vendido = false
    }
    //MÉTODO PARA SUMAR IVA
    sumaIva() {
        this.precio = this.precio * 1.21
    }
    //MÉTODO PARA VENDER EL PRODUCTO
    vender() {
        this.vendido = true
    }
}

class ProductoModel {
    constructor() {
        const productos = JSON.parse(localStorage.getItem('productos')) || []  //OBTENEMOS EL ARRAY DE PRODUCTOS PARSEANDO DESDE EL JSON SI EXISTE
        this.productos = productos.map(producto => new Producto(producto))
    }

    guardarProductos() {
        localStorage.setItem('productos', JSON.stringify(this.productos))
    }

    agregarProducto(producto) {
        //debugger
        this.productos.push(new Producto(producto))
        this.guardarProductos()
        const propiedades = "green white-text"
        M.toast({html: `Se agregó el producto '${producto.nombre}'`, classes: propiedades})
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(producto => producto.id !== id)
        this.guardarProductos()
    }

    buscarProducto(id) {
        return this.productos.find(producto => producto.id === id)
    }
}

class ProductoView {
    agregarProducto(padre, callback) {
        $(padre).html(` <section class="borde-interior center">
                            <br>
                            <h4>AGREGAR PRODUCTO</h4>
                            <br><br>
                            <input type="text" placeholder="Nombre del producto">
                            <br><br>
                            <input type="number" placeholder="Importe">
                            <br><br>
                            <button id="btnEnviar" class="btn green white-text waves-effect waves-light">ENVIAR</button>
                        </section>`)
        $("#btnEnviar").click(callback)
    }

    listarProductos(padre, data, callback) {
        let html = '';
        for (const producto of data) {
            html += `<div id="${producto.id}" class="borde-interior blue lighten-3 z-depth-2">
                           <h5>Producto: ${producto.nombre}</h5>
                           <b>$ ${producto.precio}</b>
                     </div>
                     <br><br>`
        }
        $(padre).html(html);
        $(".btnComprar").click(callback)
    }

    buscarProducto(padre, callback) {
        $(padre).html(`<section class="borde-interior center">
                         <h4>BUSCAR PRODUCTO</h4>
                         <input type ="number" placeholder="Ingrese el ID de producto">
                         <button id="btnBuscar" class="btn blue white-text">Buscar</button>
                      </section>`)
        $("#btnBuscar").click(callback)
    }
}

class ProductoController {
    constructor(productoModel, productoView) {
        this.productoModel = productoModel;
        this.productoView = productoView;
    }

    agregar(app) {
        this.productoView.agregarProducto(app, (event) => {
            //debugger
            let hijos = $(event.target).parent().children();
            this.productoModel.agregarProducto({
                id: this.productoModel.productos.length + 1,
                nombre: hijos[4].value,
                precio: hijos[7].value,
            });
        });
    }

    listar(app) {
        this.productoView.listarProductos(app,
            this.productoModel.productos,
            (event) => {
                let hijos = $(event.target).parent().children();
                console.log(hijos[0].value);
            });
    }

    buscar(app) {
        this.productoView.buscarProducto(app, (event) => {
            let hijos = $(event.target).parent().children();
            let id = parseInt(hijos[1].value);
            let encontrado = this.productoModel.buscarProducto(id);
            console.log(encontrado);
        });
    }
}



 