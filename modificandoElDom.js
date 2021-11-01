/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */


document.body.onload = addElement; // cada vez que recrague la pagina, me llama la funcion 


function addElement() {
    let insertDiv = document.createElement('div');
    insertDiv.innerHTML = 'Insertando un div por js'; // le digo que contenido quiero insertar

    document.body.appendChild(insertDiv); // me ayuda a insertar el contenido en body
}


/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

const div = document.createElement('div');
div.textContent = '';

const insertoP = document.createElement('p');
div.textContent = 'Insertada una p';
insertoP.appendChild(div);
/* div.appendChild(div); */

/* console.log(insertoP) // comprobando que ha insertado */

document.body.appendChild(div);

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

let parrafo = document.createElement("p");
let contenido = document.createTextNode("Soy dinámico!");

parrafo.appendChild(contenido);
document.body.appendChild(parrafo);