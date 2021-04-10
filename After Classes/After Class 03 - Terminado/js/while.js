function identificarse() {
    let palabra = prompt("Ingrese una palabra:")

    while(palabra.trim() != "Coderhouse") {
        console.warn("Ingresó " + palabra.trim() + ". Palabra incorrecta.")
        palabra = prompt("Ingrese una palabra:")        
    }
    
    M.toast({html: "Bienvenido Coderhouse.", classes: "green white-text"})
}