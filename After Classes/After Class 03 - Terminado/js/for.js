/*
Ciclo FOR
documento HTML ciclofor
	> eliminar defer
	> explicar cómo conectar a HTML desde JS mediante document.getElementById()
	> explicar propiedad innerHTML
	> hablar del array y mirar su total de elementos vía console.table()
	> eliminar <options> en HTML antes del ciclo for
	> mostrar ejemplo de <option> con template literals y concatenando normal.
	> visualizar la carga de datos con debugger
	> reemplazar el ejemplo de combo Select por un <ol><li>
	> Sumarle al ejemplo anterior, el uso de break, para cortar la carga
	> Yapa: si queremos obtener el país seleccionado del combo select, usamos combo.value
*/

let arrayPaises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]
let selectPaises = document.getElementById("selectPaises")
let listadoPaises = document.getElementById("listadoPaises")

// debugger
// selectPaises.innerHTML = ""
// for (let i = 0; i < arrayPaises.length; i++) {
//     selectPaises.innerHTML += `<option>${arrayPaises[i]}</option>`
// }

// debugger
// listadoPaises.innerHTML = ""
// for (let i = 0; i < arrayPaises.length; i++) {
//     listadoPaises.innerHTML += `<li>${arrayPaises[i]}</li>`
// }

// for (let i = 0; i < arrayPaises.length; i++) {
//         if (arrayPaises[i] == "Zimbabue") {
//             break
//         }
//     listadoPaises.innerHTML += `<li>${arrayPaises[i]}</li>`
// }