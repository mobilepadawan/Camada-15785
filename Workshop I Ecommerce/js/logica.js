//DECLARO VARIABLES
let curso = ""
let carrito = [] //mi carrito de compras
const btnVerCarrito = document.getElementById("btnVerCarrito")
const btnVolver = document.getElementById("btnVolver")
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra")
const grillaDeCursos = document.getElementById("grillaDeCursos")
const cursosEnCarrito = document.getElementById("cursosEnCarrito")
const grillaDetalleCheckOut = document.getElementById("grillaDetalleCheckOut")
const ofertaDeCursos = document.getElementById("ofertaDeCursos")
const checkOut = document.getElementById("checkOut")

// curso = new Curso(carrito)

let cargoCursos = () => { //función con la cual cargamos el array JSON de cursos, en la tabla principal
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
                //Si existe un localStorage con el carrito almacenado, lo recupero por aquí
                recuperoCarrito() 
                //localStorage no me sirve para nada, dentro de la función cargoCursos(), pero como esta última función
                //la llamo cuando se carga el documento HTML, allí es donde la lógica de recuperoCarrito() se aplica
            curso = new Curso(carrito)
            //También instancio curso dentro de la función cargoCurso(), solo para que se instancie al momento de cargar,
            //o recargar el documento HTML.
}

//Función que se adjunta a cada botón CARRITO, contenido en la tabla de cursos
//Al pulsarla, busca el curso que recibe como parámetro, lo agrega en el array carrito[], 
//y llama a la función actualizarCarrito(), para que cambie en pantalla, el número de cursos comprados.
let agregoCursoAlCarrito = (id) => {
    let r = CURSOS.find(c => c.cursoid == id)
        carrito.push(r)
        // console.log("Se agregó al carrito 👇")
        // console.table(r)
        actualizoCarrito()
        guardoCarrito() //Me guarda en localStorage, el carrito parcial de la compra realizada
}

let actualizoCarrito = () => { //Me actualiza la leyenda de cantidad de cursos en el carrito
    let leyendaCarrito = `CURSOS EN EL CARRITO: ${carrito.length}`
    cursosEnCarrito.innerHTML = leyendaCarrito
}

const armoCheckOut = () => { //Arma la grilla de CheckOut, para luego mostrarla en pantalla
    let fila = ""
    grillaDetalleCheckOut.innerHTML = ""
    if (carrito.length > 0) { //Este if() me mostrará la grilla, solo si hay cursos en el carrito
        for (let curso of carrito) { //Itero sobre todos los cursos existentes en el carrito
            fila = `<tr>
                    <td>${curso.nombre}</td>
                    <td class="right">$ ${curso.precio}</td>
                </tr>`
            grillaDetalleCheckOut.innerHTML += fila
        }
        //Creo una nueva fila con el importe total del carrito
        fila = `<tr class="blue lighten-4"> 
                    <td>Total de la compra</td>
                    <td class="right">$ ${curso.calculoTotalCarrito()}</td>
                </tr>`
        grillaDetalleCheckOut.innerHTML += fila
        //Creo una nueva fila con el descuento conseguido sobre el total de cursos comprados
        fila = `<tr class="orange lighten-4">
                    <td>Descuento conseguido</td>
                    <td class="right">$ ${curso.calculoTotalCarrito() - curso.aplicoDescuentoAlTotalCarrito()}</td>
                </tr>`
        grillaDetalleCheckOut.innerHTML += fila
        //Creo una nueva fila con el importe que pagaré, el cual tiene el descuento conseguido, ya aplicado
        fila = `<tr class="green lighten-4">
                    <td>Total a Pagar</td>
                    <td class="right">$ ${curso.aplicoDescuentoAlTotalCarrito()}</td>
                </tr>`
        grillaDetalleCheckOut.innerHTML += fila
        //Terminé de generar la grilla checkOut, entonces la muestro
        alternarListadoCursosCheckout() 
        //Al mostrar la grilla checkout, oculto la grilla de productos
    } else {
        alert("No hay elementos para mostrar.") //Si el carrito no tiene elementos, no muestro nada, y le aviso al usuario
    }
}

const alternarListadoCursosCheckout = () => { //Alterno la visualización del div cursos y el div checkout
    ofertaDeCursos.classList.toggle("hide")
    checkOut.classList.toggle("hide")
}

const finalizarCompra = () => { //Corro un proceso que simula la finalización de la compra
    alert("Muchas gracias por su compra!") //Agradezco la compra realizada
    setTimeout(() => { //Espero dos y medio segundos, 👇 luego...
        carrito = [] //vaciamos el carrito
        localStorage.clear() //limpiamos localStorage
        actualizoCarrito() //actualizo carrito en pantalla
        alternarListadoCursosCheckout() //restauramos la lista de cursos
    }, 2500);
}

//Cuando se carga o recarga el documento HTML, cargo los cursos e invoco el resto de las acciones
//contenidas anteriormente dentro de la función 👇
document.addEventListener("DOMContentLoaded", cargoCursos) 


btnVerCarrito.addEventListener("click", armoCheckOut) //Escucho el clic en ver carrito y llamo la función armoCheckout
btnVolver.addEventListener("click", alternarListadoCursosCheckout) //Oculto la grilla checkout y muestro los cursos nuevamente
btnFinalizarCompra.addEventListener("click", finalizarCompra) //Llamo a la función que finaliza la compra

const guardoCarrito = () => { //Guardo el carrito en localStorage, solo si tiene productos
    if (carrito.length > 0)
        localStorage.carrito = JSON.stringify(carrito)
}

const recuperoCarrito = () => { //Recupero el carrito de localStorage asignándole los cursos al array carrito[]
    if (localStorage.carrito != undefined) {
        carrito = JSON.parse(localStorage.carrito)
        actualizoCarrito() //actualizo la leyenda de total de productos en carrito
    }
}