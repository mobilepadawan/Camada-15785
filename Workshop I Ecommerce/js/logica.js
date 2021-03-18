//DECLARO VARIABLES
let carrito = [] //mi carrito de compras
let grillaDeCursos = document.getElementById("grillaDeCursos")
let cursosEnCarrito = document.getElementById("cursosEnCarrito")
let grillaCursosComprados = document.getElementById("grillaCursosComprados")
let grillaTotalDeLaCompra = document.getElementById("grillaTotalDeLaCompra")
let ofertaDeCursos = document.getElementById("ofertaDeCursos")
let checkOut = document.getElementById("checkOut")

//INSTANCIO EL OBJETO
let curso = new Curso("CASA DE CÓDIGO", CURSOS, carrito)

let cargoCursos = () => {
    grillaDeCursos.innerHTML = curso.listoCursos()
}

let agregoCursoAlCarrito = (cursoid) => {
    let r = carrito.find(c => c == cursoid)
        if (r == undefined) {
            carrito.push(cursoid)
            alert(`El curso ${CURSOS[cursoid - 1].nombre} fue agregado con éxito al carrito.`)
        } else {
            alert(`Ya tiene este curso en su carrito. No puede comprarlo dos veces.`)
        }
        actualizoItems()
}

let actualizoItems = () => {
    cursosEnCarrito.innerText = `CURSOS EN EL CARRITO: ${curso.elementosEnCarrito()}`
}

let muestroCheckout = () => {
    debugger
    grillaCursosComprados.innerHTML = curso.muestroCheckout()
    grillaTotalDeLaCompra.innerHTML = curso.muestroTotales()
    ofertaDeCursos.classList.toggle("hide")
    checkOut.classList.toggle("hide")
}

document.addEventListener("DOMContentLoaded", cargoCursos)