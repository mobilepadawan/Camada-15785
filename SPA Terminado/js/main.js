//PASO 2 - instanciar controlador de productos, integrando las clases Modelo y Vista
const app = new ProductoController(new ProductoModel(), new ProductoView())

const routes = [{path: '', action: 'agregar'},
                {path: '/', action: 'agregar'},
                {path: '/pagina1', action: 'listar'},
                {path: '/pagina2', action: 'buscar'}]

//PASO 3 - ARMAR COMPONENTE ERROR QUE SE MUESTRA CUANDO ESTE OCURRA O ANTE INTENTO DE NAVEGACION HACIA CONTENIDO INEXISTENTE

const ErrorComponent = (padre) => {
   const msjError = `<div class="center red darken-2 white-text borde-interior z-depth-4">
                        <h2>Error 404</h2>
                        <p>La página solicitada no se encuentra disponible o no existe.</p>
                        <i class="material-icons">sentiment_very_dissatisfied</i>
                     </div>`
         $(padre).html(msjError)
}

//PASO 4 - Obtener la RUTA generada, identificar el HASH usando location y su propiedad hash
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

// function pL() { //esto es lo mismo que la línea 21, pero con function convencional
//    if (location.hash.slice(1).toLowerCase() = "") {
//       return location.hash.slice(1).toLowerCase()
//    } else {
//       return "/"
//    }
// }

//PASO 5 - BUSCAR LA ACCION EN EL ARRAY De acuerdo a la RUTA obtenida mediante Find()
const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined)

//PASO 6 - Obtener la ruta actual y llamar al método correspondiente acorde a la acción detectada
const router = () => {
   const path = parseLocation()
   const {action = 'error'} = findActionByPath(path, routes) || {}

   switch (action) {
      case 'agregar':
         app.agregar('#app')
         break
      case 'listar':
         app.listar('#app')
         break
      case 'buscar':
         app.buscar('#app')
         break
      default:
         ErrorComponent('#app')
         break
   }
}

$(document).on('load', ()=> {
   router()
})

$(window).on('hashchange', ()=> {
   router()
})