//EVENTO READY
//Cómo lo haríamos con JAVASCRIPT convencional
//document.getElementById("contenido").innerHTML = "<p>Este contenido lo genero automáticamente desde JQuery.</p>"
$("#contenido").html("<p>Este contenido lo genero automáticamente desde JQuery.</p>")

//CUALQUIERA DE ESTAS VERSIONES FUNCIONA CORRECTAMENTE
// $(document).ready(function() {})       // $((function() {})        // $(()=> {})
let usuarios = []

$(() => {
    $("#contenido").html("<p>Este contenido lo genero automáticamente desde JQuery.</p>")

    //MANEJO DE FORMULARIOS CON ON
    const nombre = $("#nombre")
    const edad = $("#edad")
    const fechanac = $("#fechanac")

    //funciones que controlan el foco
    const reciboFoco = (campo)=> {
        campo.addClass("yellow lighten-4")
    }

    const pierdoFoco = (campo)=> {
        debugger
        campo.removeClass("yellow lighten-4")
    }

    //Inicializo los eventos para que disparen la función correspondiente

    //Intentar activar listeners de forma dinámica
/*     const vInputs = document.getElementsByTagName("input")
             for (let i of vInputs) {
                 debugger
                 if (i.type != "submit")
                     i.addEventListener("focus", ()=> {console.log("Se activó el listener para focus")})
             }
 */
    //CICLO FOR OF SOBRE SELECTORES JQUERY
    const inputs = $(":input").not(":input[type=submit]")
    for (let i of inputs) {
        //Como son dos eventos, los encadenamos dentro del mismo selector para acotar líneas de código
        $(i).on("focus", ()=> {reciboFoco($(i))})
            .on("blur", ()=> {pierdoFoco($(i))})
    }

    //SHORCUTS
    //const enviar = $("form") //OTRA ALTERNATIVA
    const enviar = $(":submit")

    //enviar.submit(function(e) {
    enviar.click(function(e) {
        e.preventDefault()
        let r = guardoUsuario()
            if (r) {
                inputs.val("") //Limpio los campos de una sola vez, aprovechando la constante INPUTS
            }
    })

    const guardoUsuario = ()=> {
        let nuevoUsuario = {usuario: nombre.val(), edad: edad.val(), fechanac: fechanac.val()}
            usuarios.push(nuevoUsuario) //Guardo nuevo usuario en el array
            localStorage.usuariosAfter = JSON.stringify(usuarios) //Guardo el array en Local Storage
            console.clear()
            console.warn("Nuevo usuario almacenado en array JSON.")
            console.table(usuarios)
            return true
    }

    if (localStorage.usuariosAfter != undefined) //Si hay algo guardado, lo recupero
        usuarios = JSON.parse(localStorage.usuariosAfter)
})