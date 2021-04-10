const desplazarMe = (titulo)=> {
   $('html', 'body').animate({
      scrollTop: $(`#${titulo}`).offset().top
   }, 2000)
}

$("#link1").click(()=> {
   desplazarMe("titulo1")
})

$("#link2").click(()=> {
   desplazarMe("titulo2")
})

$("#link3").click(()=> {
   desplazarMe("titulo3")
})