// PASO 1 - VERIFICAMOS EL ARCHIVO PRODUCTOS.JS e INDEX.HTML


// PASO 2 - INSTANCIAMOS CONTROLADOR DE PRODUCTOS
const app = new ProductoController(new ProductoModel(), new ProductoView())

const routes = [
  {path: '', action: 'agregar' },
  {path: '/', action: 'agregar' },
  {path: '/pagina1', action: 'listar' },
  {path: '/pagina2', action: 'buscar' }
]

// PASO 3 - ARMAMOS EL COMPONENTE ERROR PARA MOSTRAR CUANDO HAYA ERRORES O INTENTOS DE NAVEGACION A PAGINAS NO EXISTENTES

const ErrorComponent = (padre) => {
   const msjError = `<div class="center red white-text borde-interior z-depth-4">
                        <h2>Error 404</h2>
                        <p>La página solicitada no se encuentra disponible.</p>
                        <i class="material-icons large">sentiment_very_dissatisfied</i>
                     </div>`
         $(padre).html(msjError)
 }

//PASO 4 - VAMOS A TRABAJAR CONTRA LA URL, OBTENIENDO LA RUTA ACTUAL E IDENTIFICANDO SU HASH
//(USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH). SI "" || '/'  ENTONCES parseLocation = '/'

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'


//PASO 5 - BUSCAMOS LA ACCIÓN EN EL ARRAY routes QUE CORRESPONDE A LA RUTA CON FIND 
const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined)

//PASO 6 - OBTENER RUTA ACTUAL Y LLAMAR AL MÉTODO CORRESPONDIENTE SEGÚN LA ACCIÓN DETECTADA
const router = () => {
   //OBTENER RUTA ACTUAL
   const path = parseLocation()
   const {action = 'error'} = findActionByPath(path, routes) || {}
   // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
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


 //PASO 7 - CARGAR EL RUTEO AUTOMÁTICO CUANDO SE CARGA LA SPA
 $(document).on('load', ()=> {
   router()
 })

 //CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
 $(window).on('hashchange', ()=> {
     router()
 });