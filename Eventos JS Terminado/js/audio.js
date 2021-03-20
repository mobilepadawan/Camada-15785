let contenedorAudio = document.getElementById("contenedorAudio")
let cancion = document.getElementById("cancion")
let canciones = ["https://ferpro.online/mp3/musica/coldplay-adventure-of-a-lifetime.mp3", "https://ferpro.online/mp3/musica/the-ramones-spiderman.mp3", "https://ferpro.online/mp3/musica/talco-bella-ciao.mp3", "https://ferpro.online/mp3/musica/the-ramones-baby-i-love-you.mp3"]

let mp3 = document.createElement("audio")
    mp3.volume = 0.5
    mp3.controls = true
    mp3.id = "reproductor"
    mp3.preload = true

    contenedorAudio.appendChild(mp3)
    mp3.src = canciones[1]

    mp3.addEventListener("playing", () => console.info("La canción se está reproduciendo"))
    mp3.addEventListener("pause", () => console.warn("Se ha pausado la canción"))
    mp3.addEventListener("error", () => console.error("Ha ocurrido un error al cargar el archivo de audio"))
    mp3.addEventListener("ended", () => console.info("Ha finalizado la canción"))


    