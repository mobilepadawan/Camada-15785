let d = document

let titulo = d.getElementById("titulo")
let parrafo = d.getElementById("parrafo")
let imagen = d.getElementById("imagen")
let elementos = d.getElementById("elementos")

titulo.innerText = "Coderhouse"

//parrafo.innerText = "Esto es un texto en formato párrafo."
parrafo.innerHTML = "Esto es un texto en formato párrafo."
imagen.src = "https://pbs.twimg.com/media/EWouzMLXYAA-MiW.png"

elementos.innerHTML = "<li>Elemento 1</li><li>Elemento 1</li><li>Elemento 1</li><li>Elemento 1</li><li>Elemento 1</li><li>Elemento 1</li><li>Elemento 1</li><li>Elemento 1</li>"


let parrafos = d.getElementsByTagName("p")
//debugger
for (let p of parrafos) {
   p.innerText = "Coderhouse"
}

let tit = d.getElementsByClassName(".red-text")

