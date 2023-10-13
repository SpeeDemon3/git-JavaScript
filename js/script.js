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

const findHref = "http://prueba4"; // Referencia del penultimo enlace

const _tagsA = document.getElementsByTagName("a"); // Obtengo los elementos con la tag 'a'

for (let i = 0; i < _tagsA.length; i++) {

    // Obtengo el valor del atributo 'href' de la etiqueta actual en la posicion [i]
    let href = _tagsA[i].getAttribute('href');

    // Comparo el href actual con el buscado
    if (href === findHref) {

        // Si se encuentra el href buscado guardo el valor en una constante
        const tagFound = _tagsA[i];

        // Imprimo por consola el valor
        console.log(tagFound);

    } 

}

// Numero de enlaces que apuntan a http://prueba

const findHref2 = "http://prueba"; // Referencia que necesito encontrar

const _tagsA2 = document.getElementsByTagName("a"); // Obtengo los elementos con la tag 'a'

let countHrefFound = 0; // Variable contador

for (let i = 0; i < _tagsA2.length; i++) {

    let href = _tagsA2[i].getAttribute("href");

    if(href === findHref2) {

        countHrefFound++; // Si encontramos una referencia igual a la buscada sumamos 1 al contador

    }

}

console.log(`There are ${countHrefFound} in index.html`); // Imprimo por consola


// Numero de enlaces del tercer parrafo

const elementsP = document.querySelectorAll("p"); // Obtengo todos los elementos p

const thirdP = elementsP[2].querySelectorAll("a"); // Guardo el tercer parrafo

console.log(`There are ${thirdP.length} links`); // Imprimo por consola
