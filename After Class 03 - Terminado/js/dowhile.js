function numeros() {
    let numero = 0
    do {
        numero = prompt("Ingrese un número:")
        console.log("Ingresó el número " + numero)
    } while (Number(numero))
    console.error(numero + " no es un número.")
}