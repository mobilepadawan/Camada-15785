imagen.addEventListener("mouseover", () => imagen.style.cursor = "zoom-in")
imagen.addEventListener("mouseout", () => imagen.style.cursor = "auto")

document.addEventListener("dblclick", () => aplicoColor())

botonProgreso.addEventListener("click", () => mostrar_ocultar())

function mostrar_ocultar() {
   progreso.classList.toggle("hide")
}

mp3Page.onclick = function() {
   location.target = "_self"
   location.href = "mp3.html"
}