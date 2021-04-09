$(document).ready(()=> {
    $("#titulo").show("slow", ()=> {
        
        $.getJSON("http://localhost:5501/js/coderflix.json", (response, status)=> {
            if (status === "success") {
                let contenido = response
                    for (const film of contenido) {
                        $("#contenido").append(cargoCard(film))
                    }
            } else {
                $("#contenido").html(contenidoError)
            }
            $("#contenido").fadeIn("slow")
        })
    })
})

const contenidoError = `<div class="center red-text">
                            <i class="large material-icons">movie</i>
                            <h4 >No se pudo recuperar el contenido</h4>
                            <h5>Intente nuevamente en unos segundos...</h5>
                            <i class="large material-icons">sentiment_very_dissatisfied</i>
                        </div>`

const cargoCard = (film) => {
    if (film != undefined) {
        let leyenda = "TEMPORADAS"
            if (film.temporadas == "N/A")
                leyenda = "DURACIÓN"
            movieOrSerie = `<p class="yellow-text">${leyenda}: <span class="white-text">${film.temporadas}</span></p>`
            let card = `<div class="col s12 m6 l4">
                            <div class="card z-depth-2">
                                <div class="card-image">
                                <img src="${film.poster}">
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">search</i></a>
                                </div>
                                <div class="card-content black">
                                <p class="yellow-text">GÉNERO: <span class="white-text">${film.genero}</span></p>
                                ${movieOrSerie}
                                </div>
                            </div>
                        </div>`
                return card
    }
}