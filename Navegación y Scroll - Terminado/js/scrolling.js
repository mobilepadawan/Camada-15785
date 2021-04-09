function desplazarMe(titulo) {
   $('html, body').animate({
      scrollTop: $('#' + titulo).offset().top
   }, 1000)
}

$('#link2').click(function() {desplazarMe("titulo2")})

$('#link3').click(function() {desplazarMe("titulo3")})