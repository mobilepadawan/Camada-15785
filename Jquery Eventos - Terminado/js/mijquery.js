//document.addEventListener("DOMContentLoaded", recuperoJSON)
//Espera a que se cargue TODO el contenido del DOC HTML

//document.addEventListener("load", recuperoJSON)
//no espera que se carguen todos los recursos externos, para comenzar a funcionar (imágenes, audio, video, etc)


//$document.ready, es equivalente a DOMContentLoaded y se puede usar N cantidad de veces
$(()=> { 
    console.log("El DOM se ha cargado correctamente.")

    let divCotizador = $("#cotizador")
    divCotizador.append('<input type="number" id="monto" placeholder="Monto a comprar">')
    divCotizador.append('<input type="number" id="cotizacion" placeholder="Ingrese cotización del día">')
    divCotizador.append('<br><br>')
    divCotizador.append('<div class="center">')
    divCotizador.append('<button id="btnCotizar" class="btn green darken-2 white-text waves-effect waves-light">COMPRAR</button>')
    divCotizador.append('</div>')

    // $("#btnCotizar").on("click", ()=> {
    //   let monto = $("#monto").val()
    //   let cotizacion = $("#cotizacion").val()
    //       alert(monto * cotizacion)
    // })

    //Mismo que arriba, pero usando JQ Shortcut
    $("#btnCotizar").click(()=> {
      let monto = $("#monto").val()
      let cotizacion = $("#cotizacion").val()
          alert(monto * cotizacion)
    })

    $(":input").change((e)=> {
        console.log(`El campo '${e.target.id}' tiene un valor de ${e.target.value}`)
    })

    $("form").submit((e)=> {
        e.preventDefault()
        console.log($(":input"))
    })



    //RESPUESTA FINALIZADA LA CLASE PARA NICO PEREDNIK
    //AGREGAR MAS ELEMENTOS A UN ARRAY JSON, LEVANTANDO LOS DATOS 
    //DESDE INPUT TYPES CON JQUERY, Y EL MÈTODO VAL()

    const CURSOS = {id: 1, producto: "CURSO JAVASCRIPT", importe: "$ 15000",
                    id: 2, producto: "CURSO REACT", importe: "$ 16000",
                    id: 3, producto: "CURSO NODE", importe: "$ 18500",}


    $("#btnAgregar").click(()=> {
      let curso = {id: 4, producto: "CURSO PYTHON", importe: "$ 13800"}
          curso.id = $(":input#id").val()
          curso.producto = $(":input#producto").val()
          curso.importe = $(":input#importe").val()
          CURSOS.push(curso)
    })
})