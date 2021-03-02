let usuario = document.getElementById("usuario")
let mensaje = ""
let clases = ""

function identificarme() {
    clases = "green white-text"
    switch(usuario.value.trim()) {
        case "Fernando":
            mensaje = "Bienvenido " + usuario.value + ". Usted pertenece al sector DESARROLLO."
            break
        case "Omar":
            mensaje = "Bienvenido " + usuario.value + ". Usted pertenece al sector IT."
            break
        case "Coder":
            mensaje = "Bienvenido " + usuario.value + ". Usted pertenece al sector EDUCACIÓN."
            break
        default:
            mensaje = usuario.value + " no es un usuario válido."
            clases = "red white-text"
            usuario.value = ""
            usuario.focus()
    }
    M.toast({html: mensaje, classes: clases})
}