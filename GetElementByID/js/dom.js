var d = document;
var ls = localStorage;
var contenido = d.getElementById('contenido');

d.title = 'Coderhouse'
d.body.style.color = 'grey';
//d.body.style.fontFamily = 'Courier';
d.body.style.backgroundColor = 'white';


// //GET ELEMENT BY ID
// var t = d.getElementById('titulo');
// var p = d.getElementById('parrafo');
// var i = d.getElementById('imagen');

// //https://pbs.twimg.com/media/EWouzMLXYAA-MiW.png
// t.innerText = 'Nuevo título';
// p.innerText = 'Esto es un nuevo párrafo, que reemplaza al anterior (u original).';
// i.src = 'https://pbs.twimg.com/media/EWouzMLXYAA-MiW.png';



// function transicion(colour) {
//     d.body.style.transition = '1s ease-in';
//     d.body.style.backgroundColor = colour;
//     ls.setItem('background', colour);
// }

// document.body.onload = function() {
//     d.body.style.backgroundColor = ls.getItem('background');
// }

// //t.classList.add('hide');
// //t.classList.remove('hide');
// //t.classList.toggle('hide');
// d.getElementById('contenido').classList.add('hide');