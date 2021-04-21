let coderflix

      $.getJSON( "js/coderflix.json")
      .done((response) => {
         coderflix = response
         console.table(coderflix)
      })
      .fail(( jqxhr, textStatus, error ) => {
         let err = textStatus + ", " + error
             console.error( "Falló la obtención de datos: " + err )
      })

const buscoTitulo = (campo) => {
   let res = []
   const resultadoTitulos = coderflix.filter(c => c.titulo.includes($(`#${campo}`).val()))
      if (resultadoTitulos.length > 0)
         res = resultadoTitulos
      return res
}

const buscoCategoria = (array) => (array.filter(c => c.categoria == $("#categoria").val()))

const buscoActor = (campo, array) => {
   let res = []
   const resultadoActores = array.filter(a => a.reparto.includes($(`#${campo}`).val()))
   if (resultadoActores.length > 0)
      res = resultadoActores
   return res
}

const buscar =()=> {
   const resTitulos = buscoTitulo("titulo")
   const resCategoria = (resTitulos != []) ? buscoCategoria(resTitulos) : buscoCategoria(coderflix)
   const resultado = (resCategoria != []) ? buscoActor("reparto", resCategoria) : buscoActor("reparto", coderflix)
         debugger
         (resultado != []) ? console.table(resultado) : console.warn("No se encontraron resultados. Refine su búqueda por favor.")
}

$("button").click(()=> buscar())