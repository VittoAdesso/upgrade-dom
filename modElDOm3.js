/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement('li');
const textoLista = document.createTextNode(apps[0]);


lista.appendChild(textoLista); // Añadimos el nodo como hijo 
document.body.appendChild(lista); // Añadimos hijo de body

/* 2.7 Elimina todos los nodos que tengan la clase.fn - remove - me */

let element1 = document.getElementById("fn-remove-me");
element1.remove("fn-remove-me");


/* 2.8 Inserta una p con el texto 'Voy en medio!'
Recuerda que no solo puedes insertar elementos con.appendChild.   */

let nuevoElemento = document.createElement("p");

let textoDelElemento = document.createTextNode("Voy en medio!");

nuevoElemento.appendChild(textoDelElemento); // Añadimos el nodo "textoDelElemento" como hijo de "nuevoElemento"

document.body.appendChild(nuevoElemento); // Añadimos "nuevoElemento" como hijo de body


/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase.fn -
    insert - here */

document.body.onload = addElement;

function addElement() {
    // crea un nuevo div
    // y añade contenido

    const newDiv = document.getElementById('fn - insert - here');
    const newContent = document.createTextNode("Voy dentro!");
    newDiv.appendChild(newContent); // añado el div creado

}