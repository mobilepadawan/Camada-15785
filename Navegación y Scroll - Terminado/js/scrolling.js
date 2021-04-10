/* onst desplazarMe = (titulo) => {
   $('html, body').animate({
      scrollTop: $(`#${titulo}`).offset().top
   }, 1000)
}

$('#link1').click(()=> {desplazarMe("titulo1")})
$('#link2').click(()=> {desplazarMe("titulo2")})
$('#link3').click(()=> {desplazarMe("titulo3")})
 */


//Agregamos el control de tiempo para suavizar el desplazamiento
const desplazarMe = (titulo, vel) => {
   $('html, body').animate({
      scrollTop: $(`#${titulo}`).offset().top
   }, vel)
}

$('#link1').click(()=> {desplazarMe("titulo1", 1000)})
$('#link2').click(()=> {desplazarMe("titulo2", 2000)})
$('#link3').click(()=> {desplazarMe("titulo3", 3000)})
