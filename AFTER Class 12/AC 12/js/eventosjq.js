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
        campo.removeClass("yellow lighten-4")
    }

    //Inicializo los eventos para que disparen la función correspondiente
    nombre.on("focus", ()=> {reciboFoco(nombre)})
    nombre.on("blur", ()=> {pierdoFoco(nombre)})
    edad.on("focus", ()=> {reciboFoco(edad)})
    edad.on("blur", ()=> {pierdoFoco(edad)})
    fechanac.on("focus", ()=> {reciboFoco(fechanac)})
    fechanac.on("blur", ()=> {pierdoFoco(fechanac)})

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
    debugger
    for (let i of inputs) {
        console.log(i)
        $(i).on("focus", ()=> {
            console.log(`El Input ${i} activó su listener`)
        })
    }

    //SHORCUTS
    //const enviar = $("form") //OTRA ALTERNATIVA
    const enviar = $(":submit")

    //enviar.submit(function(e) {
    enviar.click(function(e) {
        e.preventDefault()
        let r = guardoUsuario()
            if (r) {
                $(":input").val("") //Limpio los campos de una sola vez
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