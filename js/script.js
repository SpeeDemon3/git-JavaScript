/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

    Número de enlaces de la página
    Dirección a la que enlaza el penúltimo enlace
    Numero de enlaces que enlazan a http://prueba
    Número de enlaces del tercer párrafo

 */

// Numero de enlaces de la pagina
console.log("Hello JS");

let tagsA = document.getElementsByTagName('a'); // Obtengo los elementos con la tag 'a'

const arrayTagsA = [...tagsA]; // Convierto los elementos recibidos en un array

console.log(arrayTagsA.length); // Imprimo por consola el numero de elementos que contiene el array


// Direccion del penultimo enlace

// Numero de enlaces que apuntan a http://prueba

// Numero de enlaces del tercer p�rrafo