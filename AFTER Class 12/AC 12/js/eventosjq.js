//CUALQUIERA DE ESTAS VERSIONES FUNCIONA CORRECTAMENTE
// $(document).ready(function() {})       // $((function() {})        // $(()=> {})
let usuarios = []
$("#contenido").append("<p>Este contenido lo genero automáticamente desde JQuery.</p>")
// $(() => {
//     $("#contenido").append("<p>Este contenido lo genero automáticamente desde JQuery.</p>")

//     //MANEJO DE FORMULARIOS CON ON
//     const nombre = $("#nombre")
//     const edad = $("#edad")
//     const fechanac = $("#fechanac")

//     //funciones que controlan el foco
//     const reciboFoco = (campo)=> {
//         campo.addClass("yellow lighten-4")
//     }

//     const pierdoFoco = (campo)=> {
//         debugger
//         campo.removeClass("yellow lighten-4")
//     }

//     const inputs = $(":input").not(":input[type=submit]") //CICLO FOR OF SOBRE SELECTORES JQUERY
//     for (let i of inputs) {
//         //Como son dos eventos, los encadenamos dentro del mismo selector para acotar líneas de código
//         $(i).on("focus", ()=> {reciboFoco($(i))})
//             .on("blur", ()=> {pierdoFoco($(i))})
//     }

//     const enviar = $(":submit")
//         enviar.click(function(e) {
//             e.preventDefault()
//              if (guardoUsuario())
//                  inputs.vale("") //limpio los campos de una sola vez, aprovechando la constante 'inputs'
//         })

//     const guardoUsuario = ()=> {
//         let nuevoUsuario = {usuario: nombre.val(), edad: edad.val(), fechanac: fechanac.val()}
//             usuarios.push(nuevoUsuario) //Guardo nuevo usuario en el array
//             localStorage.usuariosAfter = JSON.stringify(usuarios) //Guardo el array en Local Storage
//             console.clear()
//             console.warn("Nuevo usuario almacenado en array JSON.")
//             console.table(usuarios)
//             return true
//     }

//     if (localStorage.usuariosAfter != undefined) //Si hay algo guardado, lo recupero
//         usuarios = JSON.parse(localStorage.usuariosAfter)
// })