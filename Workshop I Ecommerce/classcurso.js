class Curso {
    constructor(empresa, listadocursos, carrito) {
        let nombreEmpresa = empresa
        let jsonCURSOS = listadocursos
        carrito = carrito

        this.elementosEnCarrito = () => {
            return carrito.length
        }

        this.listoCursos = () => {
            if (jsonCURSOS === undefined || jsonCURSOS === "") {
                return  `<tr>td>No se encontraron cursos para mostrar. :( </td></tr>`
            } else {
            let htmlCURSOS = `<tr>
                                 <td>JAVASCRIPT</td>
                                 <td>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</td>
                                 <td>$ 15000</td>
                                 <td><button class="btn whitesmoke black-text waves-effect waves-black" onclick=""><i class='material-icons'>search</i></button></td>    
                                 <td><button class="btn yellow black-text waves-effect waves-black" onclick=""><i class='material-icons'>add_shopping_cart</i></button></td>    
                             </tr>`
                return htmlCURSOS
            }
        }

        this.calculoTotalCarrito = () => {
            
        }
    }
}