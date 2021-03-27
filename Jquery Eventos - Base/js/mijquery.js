const CURSOS = [{id: 1, producto: "CURSO JAVASCRIPT", importe: "$ 15000"},
                {id: 2, producto: "CURSO REACT", importe: "$ 16000"},
                {id: 3, producto: "CURSO NODE (backend)", importe: "$ 18500"}]


$("#btnAgregar").click(()=> {
   let curso = {id: 4, producto: "CURSO PYTHON", importe: "$ 12000"}
      

      curso.id = $(":input#id").val()
      curso.producto = $(":input#producto").val()
      curso.importe = $(":input#importe").val()
      CURSOS.push(curso)
})


$(document).ready(function() {
   console.log("El DOM se ha cargado exitosamente.")

   let divCotizador = $("#cotizador")
       divCotizador.append('<input type="number" id="monto" placeholder="Monto a comprar">')
       divCotizador.append('<input type="number" id="cotizacion" placeholder="Ingrese cotización del día">')
       divCotizador.append('<br><br>')
       divCotizador.append('<div class="center">')
       divCotizador.append('<button id="btnCotizar" class="btn green darken-2 white-text waves-effect waves-light">COMPRAR</button>')
       divCotizador.append('</div>')

      $("#btnCotizar").click(()=> {
         let monto = $("#monto").val()
         let cotizacion = $("#cotizacion").val()
            alert(monto * cotizacion)
      })

      $(":input").change((e)=> {
         console.log(`El campo ${e.target.id} tiene el valor ${e.target.value}`)
      })

      $("form").submit(function(e) {
         e.preventDefault()
         console.log($(":input"))
      })
})