//DECLARO VARIABLES
let curso = ""
let carrito = [] //mi carrito de compras
const jsonCHECKOUT = [] //mi checkout de compra
const btnVerCarrito = document.getElementById("btnVerCarrito")
const btnVolver = document.getElementById("btnVolver")
const btnfinalizarcompra = document.getElementById("btnfinalizarcompra")
const grillaDeCursos = document.getElementById("grillaDeCursos")
const cursosEnCarrito = document.getElementById("cursosEnCarrito")
const grillaDetalleCheckOut = document.getElementById("grillaDetalleCheckOut")
const ofertaDeCursos = document.getElementById("ofertaDeCursos")
const checkOut = document.getElementById("checkOut")

curso = new Curso(carrito)

let cargoCursos = () => {
    grillaDeCursos.innerHTML = ""
    for (let curso of CURSOS) {
        let fila = `<tr>
                        <td>${curso.nombre}</td>
                        <td>${curso.descripcion}</td>
                        <td>${curso.precio}</td>
                        <td>${curso.horas}</td>
                        <td><button class="btn yellow black-text waves-effect waves-black" onclick="agregoCursoAlCarrito(${curso.cursoid})"><i class='material-icons'>add_shopping_cart</i></button></td>
                    <tr>`
                    grillaDeCursos.innerHTML += fila
                }
            recuperoCarrito()
            curso = new Curso(carrito)
}

let agregoCursoAlCarrito = (id) => {
    let r = CURSOS.find(c => c.cursoid == id)
        carrito.push(r)
        console.log("Se agregó al carrito 👇")
        console.table(r)
        actualizoCarrito()
        guardoCarrito()
}

let actualizoCarrito = () => {
    let leyendaCarrito = `<span id="cursosEnCarrito">CURSOS EN EL CARRITO: ${carrito.length}</span>`
    cursosEnCarrito.innerHTML = leyendaCarrito
}

const armoCheckOut = () => {
    let fila = ""
    grillaDetalleCheckOut.innerHTML = ""
    if (carrito.length > 0) {
        for (let curso of carrito) {
            fila = `<tr>
                    <td>${curso.nombre}</td>
                    <td class="right">$ ${curso.precio}</td>
                </tr>`
            grillaDetalleCheckOut.innerHTML += fila
        }
        fila = `<tr class="blue lighten-4">
                    <td>Total de la compra</td>
                    <td class="right">$ ${curso.calculoTotalCarrito()}</td>
                </tr>`
        grillaDetalleCheckOut.innerHTML += fila
        fila = `<tr class="orange lighten-4">
                    <td>Descuento conseguido</td>
                    <td class="right">$ ${curso.calculoTotalCarrito() - curso.aplicoDescuentoAlTotalCarrito()}</td>
                </tr>`
        grillaDetalleCheckOut.innerHTML += fila
        fila = `<tr class="green lighten-4">
                    <td>Total a Pagar</td>
                    <td class="right">$ ${curso.aplicoDescuentoAlTotalCarrito()}</td>
                </tr>`
        grillaDetalleCheckOut.innerHTML += fila
        alternarListadoCursosCheckout()
    } else {
        alert("No hay elementos para mostrar.")
    }
}

const alternarListadoCursosCheckout = () => {
    ofertaDeCursos.classList.toggle("hide")
    checkOut.classList.toggle("hide")
}

const finalizarCompra = () => {
    debugger
    alert("Muchas gracias por su compra!")
    setTimeout(() => {
        carrito = [] //vaciamos el carrito
        localStorage.clear() //limpiamos localStorage
        actualizoCarrito() //actualizo carrito en pantalla
        alternarListadoCursosCheckout() //restauramos la lista de cursos
    }, 2500);
}

document.addEventListener("DOMContentLoaded", cargoCursos)
btnVerCarrito.addEventListener("click", armoCheckOut)
btnVolver.addEventListener("click", alternarListadoCursosCheckout)
btnfinalizarcompra.addEventListener("click", finalizarCompra)

const guardoCarrito = () => {
    if (carrito.length > 0)
        localStorage.carrito = JSON.stringify(carrito)
}

const recuperoCarrito = () => {
    if (localStorage.carrito != undefined) {
        carrito = JSON.parse(localStorage.carrito)
        actualizoCarrito()
    }
}