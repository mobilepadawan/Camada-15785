let usuarios = []

$(document).ready(function() {
   $("#contenido").append("<p>Este contenido lo genero automáticamente desde JQuery.</p>")

   const nombre = $("#nombre")
   const edad = $("#edad")
   const fechanac = $("#fechanac")

      const reciboFoco = (campo)=> {
         campo.addClass("yellow lighten-4")
      }

      const pierdoFoco = (campo)=> {
         campo.removeClass("yellow lighten-4")
      }

   const inputs = $(":input").not(":input[type=submit]")
   //const inputs = document.querySelectorAll("input")
   for (let i of inputs) {
      $(i).on("focus", ()=> {reciboFoco($(i))}).on("blur", ()=> {pierdoFoco($(i))})
/*       i.addEventListener("focus", laFuncion())
      i.addEventListener("blur", laFuncionBlur()) */
   }

   const guardoUsuario = ()=> {
      let nuevoUsuario = {usuario: nombre.val(), edad: edad.val(), fechanac: fechanac.val()}
         usuarios.push(nuevoUsuario)
         console.clear()
         console.table(usuarios)
   }

   $("#enviar").click(()=> {
      guardoUsuario()
   })

})