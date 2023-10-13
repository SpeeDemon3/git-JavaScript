/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

    Número de enlaces de la página
    Dirección a la que enlaza el penúltimo enlace
    Numero de enlaces que enlazan a http://prueba
    Número de enlaces del tercer párrafo

 */

// Numero de enlaces de la pagina
console.log("Hello JS");

let tagsA = document.getElementsByTagName('a'); // Obtengo los elementos con la tag 'a' de dentro del DOM

const arrayTagsA = [...tagsA]; // Convierto los elementos recibidos en un array

console.log(arrayTagsA.length); // Imprimo por consola el numero de elementos que contiene el array


// Direccion del penultimo enlace

let findHref = "http://prueba4"; // Referencia del penultimo enlace

const _tagsA = document.getElementsByTagName("a"); // Obtengo los elementos con la tag 'a'

for (let i = 0; i < _tagsA.length; i++) {

    // Obtengo el valor del atributo 'href' de la etiqueta actual
    let href = _tagsA[i].getAttribute('href');

}

// Numero de enlaces que apuntan a http://prueba

// Numero de enlaces del tercer p�rrafo