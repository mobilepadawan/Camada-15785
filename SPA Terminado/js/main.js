const app = new ProductoController(new ProductoModel(), new ProductoView());
// LISTA DE RUTAS (ASOCIAR A CADA ACCION)
const routes = [
   {path: '', action: 'agregar' },
   {path: '/', action: 'agregar' },
   {path: '/pagina1', action: 'listar' },
   {path: '/pagina2', action: 'buscar' }
]

const ErrorComponent = (padre) => {
   const msjError = `<div class="center red white-text borde-interior">
                        <h2>Error 404</h2>
                        <p>La página solicitada no se encuentra disponible.</p>
                        <i class="material-icons large">sentiment_very_dissatisfied</i>
                     </div>`
   $(padre).html(msjError)
 }

//OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH). SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

//BUSCAMOS LA ACCIÓN EN EL ARRAY routes QUE CORRESPONDE A LA RUTA CON FIND 
const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined)

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

 $(document).on('load', function()  {
   router()
 })

 //CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
 $(window).on('hashchange', function() {
     router()
 });