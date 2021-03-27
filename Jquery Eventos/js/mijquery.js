/*
            <input type="number" id="monto" placeholder="Monto a comprar">
            <input type="number" id="cotizacion" placeholder="Ingrese cotización del día">
            <br>
            <br>
            <div class="center">
              <button class="btn green darken-2 white-text waves-effect waves-light">COMPRAR</button>
            </div>   
*/
/*
   const PRODUCTOS = [{}]
*/
const CURSOS = [{id: 1, producto: "CURSO JAVASCRIPT", importe: "$ 15000"},
                {id: 2, producto: "CURSO REACT", importe: "$ 16000"},
                {id: 3, producto: "CURSO NODE (backend)", importe: "$ 18500"},]

$(document).ready(function() {
   console.log("El DOM se ha cargado.")
   $("#cotizador").append('<input type="number" id="monto" placeholder="Monto a comprar">')
   $("#cotizador").append('<input type="number" id="cotizacion" placeholder="Ingrese cotización del día">')
   $("#cotizador").append('<br>')
   $("#cotizador").append('<br>')
   $("#cotizador").append('<div class="center">')
   $("#cotizador").append('<button id="btnCotizar" class="btn green darken-2 white-text waves-effect waves-light">COMPRAR</button>')
   $("#cotizador").append('</div>')
   $("#btnCotizar").on("click", ()=> {
      let monto = $("#monto").val()
      let cotizacion = $("#cotizacion").val()
         alert(`$ ${monto * cotizacion}`)
   })
   
   //NO USAR HASTA DIAPOSITIVA 63
   $(":input").change((e)=> {
      console.log(`El campo ${e.target.id} tiene un valor de ${e.target.value}`)
   })
   //FIN DE NO USAR

})

$(()=> { //alternativa abreviada con arrow functions de document.load()
         $("#btnCursos").on("dblclick", function() {
            for (let curso of CURSOS) {
               $("#listadoCursos").append(`<tr>
                                             <td>${curso.id}</td>
                                             <td>${curso.producto}</td>
                                             <td>${curso.importe}</td>
                                          </tr>`)
            }
         })
})