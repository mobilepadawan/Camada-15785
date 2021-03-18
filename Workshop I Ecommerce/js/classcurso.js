class Curso {
    constructor(empresa, listadocursos, carritoCursos) {
        let nombreEmpresa = empresa
        let jsonCURSOS = listadocursos
        let carrito = carritoCursos

        this.elementosEnCarrito = () => {
            let elementos = carritoCursos.length
                if (elementos == undefined)
                    elementos = 0
                return elementos
        }

        this.listoCursos = () => {
            let htmlCURSOS = `<tr>td><h3 class="red-text">No se encontraron cursos para mostrar. :( </h3></td></tr>`
                if (jsonCURSOS != undefined && jsonCURSOS != "") {
                    htmlCURSOS = ""
                    for (let itemCurso of jsonCURSOS) {
                        htmlCURSOS += `<tr>
                                          <td>${itemCurso.nombre}</td>
                                          <td>${itemCurso.descripcion}</td>
                                          <td>$ ${itemCurso.precio}</td>
                                          <td><button class="btn whitesmoke black-text waves-effect waves-black" onclick=""><i class='material-icons'>search</i></button></td>    
                                          <td><button class="btn yellow black-text waves-effect waves-black" onclick="agregoCursoAlCarrito(${itemCurso.cursoid})"><i class='material-icons'>add_shopping_cart</i></button></td>    
                                      </tr>`
                    }
                    return htmlCURSOS
                }
        }

        this.calculoTotalCarrito = () => {
            let total = 0
                for (let item of carrito) {
                    let r = jsonCURSOS.find(c => c.cursoid == item)
                        if (r != undefined) {
                            total += parseInt(r.precio)
                        }
                }
                return total
        }

        this.aplicoDescuentoAlTotalCarrito = () => {
            let totalConDescuento = 0
            let totalSinDescuento = this.calculoTotalCarrito()
                switch(this.elementosEnCarrito()) {
                    case 1: //aplico el 5%
                        totalConDescuento = (totalSinDescuento * 0.95)
                    case 2: //aplico el 10%
                        totalConDescuento = (totalSinDescuento * 0.90)
                    case 3: //aplico el 15%
                        totalConDescuento = (totalSinDescuento * 0.85)
                    case 4: //aplico el 20%
                        totalConDescuento = (totalSinDescuento * 0.80)
                    default: //No aplico descuento
                        totalConDescuento = totalConDescuento
                }
                return totalConDescuento
        }

        this.muestroCheckout = () => {
            let htmlCHECKOUT = ""
                for (let item of carrito) {
                    let c = CURSOS.find(c => c.cursoid == item)
                        htmlCHECKOUT += `<tr>
                                            <td>${c.nombre}</td>
                                            <td>${c.horas}</td>
                                            <td class="right">$ ${c.precio}</td>    
                                        </tr>`
                }
                return htmlCHECKOUT
        }

        this.muestroTotales = () => {
            let htmlTOTALES = ""
            return htmlTOTALES = `<tr>
                                      <td>SUBTOTAL</td>
                                      <td class="right">$ ${this.calculoTotalCarrito()}</td>
                                  </tr>
                                  <tr>
                                      <td>DESCUENTO</td>
                                      <td class="right">$ ${parseInt(this.calculoTotalCarrito()) - parseInt(this.aplicoDescuentoAlTotalCarrito())}</td>
                                  </tr>
                                  <tr class="blue lighten-4">
                                      <td>TOTAL</td>
                                      <td class="right">$ ${this.aplicoDescuentoAlTotalCarrito()}</td>
                                  </tr>`
        }
    }
}