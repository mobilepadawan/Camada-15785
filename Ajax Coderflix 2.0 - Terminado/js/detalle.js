let HTMLTable = ""
let HTMLtrailer = ""

$(document).ready(function() {
   if (localStorage.detalleFilm != undefined) {
      const film = JSON.parse(localStorage.detalleFilm)
      HTMLTable = `<div class="row center">
                     <div class="col s12 m5 l4 center-align">
                     <img src="${film.poster}" width="100%">
                     </div>
                     <div class="col s12 m7 l8">
                     <table>
                        <tbody class="white-text">
                           <tr>
                           <td class="yellow-text">TÍTULO</td>
                           <td><h5>${film.titulo}</h5></td>
                           </tr>
                           <tr>
                           <td class="yellow-text">CATEGORÍA</td>
                           <td>${film.categoria}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">GÉNERO</td>
                           <td>${film.genero}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">RESUMEN</td>
                           <td>${film.resumen}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">TEMPORADAS</td>
                           <td>${film.temporadas}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">REPARTO</td>
                           <td><h6>${film.reparto}</h6></td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                     </div>`
      if (film.trailer > "")
         HTMLtrailer = `<div class="video-container">
                           <iframe width="560" height="315" src="${film.trailer}" frameborder="0" encrypted-media; allowfullscreen></iframe>
                        </div>`
         $("#trailer").html(HTMLtrailer)
   }
   $('#contenido').html(HTMLTable)
})

$("button").click(()=> {history.go(-1)})

$(window).ready(function() {
   $('h1').fadeIn(800, function() {
      $('h4').fadeIn(500, function() {
         $('button').fadeIn(500)
      })
      $('#contenido').slideDown("slow", function() {
         $('#trailer').fadeIn()
      })
   })
})