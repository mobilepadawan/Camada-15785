// let nombre = "Coder"
// let apellido = "House"
// let edad = 7
// let domicilio = "Dentro de Zoom 123"

// const persona1 = {nombre: "Coder", apellido: "House", edad: 7, domicilio: "Dentro de Zoom 123"}
// const persona2 = {nombre: "Pepe", apellido: "Argento", edad: 55, domicilio: "Barrio de Flores"}

//FUNCTIÓN CONSTRUCTORA
// class producto {
//     constructor(nombre, stock, precio, iva) {
//         this.nombre = nombre
//         this.stock = stock
//         this.precio = precio
//         this.iva = iva
//         this.saludar = function () {
//             console.log("Hola, me llamo " + this.nombre + ".")
//         }
//         this.precioConIVA = function () {
//             if (iva == undefined || iva == 0 || iva == "" || iva == null) {
//                 return console.error("El impuesto al valor agregado no fue configurado.")
//             } else {
//                 return console.log((Number(precio) * Number(iva)).toFixed(2))
//             }
//         }
//         this.desc10off = function () {
//             return (precio * 0.9).toFixed(2)
//         }
//     }
// }

// const producto1 = new producto("Macbook Air", 1, 950, 1.21)
// const producto2 = new producto("EXO i3", 1, 600, 1.105)

//OPERADOR IN
//console.log("precio" in producto1)

//OPERADOR FOR IN
// for (const propiedad in producto1)
// {
//     console.log(producto1[propiedad])
// }

//CLASES CONTRUCTORAS
class producto {
    constructor(pid, nombre, stock, precio, iva) {
        let productoid = pid //Declarar esta variable al final del ejercicio
        this.nombre = nombre
        this.stock = stock
        this.umbral = 10
        this.precio = precio
        this.iva = iva
        this.descuentoStock = function (unidades) {
            this.stock -= unidades
            console.log("Se descontó " + unidades + " unidad(es) del stock. Quedan " + this.stock + " unidad(es).")
        }
        this.umbralDeStock = function() {
            if (this.umbral > this.stock) {
                console.warn("Debe realizar un nuevo pedido.")
            } else {
                console.info("El stock de productos es óptimo.")
            }
        }
        this.precioConIVA = function () {
            if (iva == undefined || iva == 0 || iva == "" || iva == null) {
                return console.error("El impuesto al valor agregado no fue configurado.")
            } else {
                return console.log((Number(precio) * Number(iva)).toFixed(2))
            }
        }
        this.desc10off = function () {
            return (precio * 0.9).toFixed(2)
        }
        this.productoID = function() {
            return console.log(productoid)
        }
    }
}

const producto1 = new producto(22549032, "Macbook Air", 15, 950, 1.21)
const producto2 = new producto(22549033, "EXO i3", 50, 600, 1.105)
const producto3 = new producto(22549034, "Lenovo i7", 20, 1200, 1.21)
const producto4 = new producto(22549035, "Dell", 15, 975, 1.105)
const producto5 = new producto(22549036, "Surface", 21, 1420, 1.21)