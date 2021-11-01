/*2.5  Inserta en el h2 con la clase.fn - insert - here el texto 'Wubba Lubba dub dub'. */

let nuevoContenido = document.createTextNode('p');
nuevoContenido.textContent = 'Wubba Lubba dub dub';


const currentDiv = document.getElementById("fn-insert-here1");
document.body.insertBefore(nuevoContenido, currentDiv);


/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

document.body.onload = insertando6p; // cada vez que me recargue la pagina, me ejecuta la función 

function insertando6p() {

    for (let i = 0; i < 6; i++) { // creo un loop

        let insertVariasP = document.createElement('p'); //creo una variable p que se impre tantas veces como recorre el loop
        insertVariasP.innerHTML = 'Insertando un texto por js, mediante un loop for'; // le digo que contenido quiero insertar

        document.body.appendChild(insertVariasP); // me ayuda a insertar el contenido en body // la llamo 

    }

}


/* ITERACIÓN 4 */