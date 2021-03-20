class Curso { 
    constructor(carritoCursos) {
        let carrito = carritoCursos

        this.calculoTotalCarrito = () => {
            let total = 0
            for (let curso of carrito) {
                total += parseFloat(curso.precio)
            }
            return total
        }

        this.aplicoDescuentoAlTotalCarrito = () => {
            let totalConDescuento = 0
            let totalSinDescuento = this.calculoTotalCarrito()
            let r = DESCUENTO.find(d => d.total == parseInt(carrito.length))
            if (r == undefined) {
                console.warn("No se contempla un descuento para tanta cantidad de cursos.")
                totalConDescuento = totalSinDescuento
            } else {
                totalConDescuento = (totalSinDescuento * parseFloat(r.factor))
            }
            return totalConDescuento
        }
    }
}