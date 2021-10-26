/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

/* cuando llamo a clases le hago referencia con .nombre */
const boton = document.querySelector('.showme');
console.log(boton);


function botonP() {
    console.log(document.querySelector('.showme'));
}

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

/* cuando llamo ids le hago referencia al #nombre  */
const titulo1 = document.querySelector('#pillado');
console.log(titulo1);


/* 
1.3 Usa querySelector para mostrar por consola todos los p */

const phrases = document.querySelectorAll('p');
console.log(phrases);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const pokemones = document.querySelectorAll('.pokemon');
console.log(pokemones);

const pokemones2 = document.querySelector('.pokemon');
console.log(pokemones2);


/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

const justicelige = document.querySelectorAll('span[data-function="testMe"]');
console.log(justicelige);


/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".  */

/* cada vez que utilizo el queryall y quiero llamar a un valor o indice específico... debo fuera del contenido darle el index en [] */

const justicelige3 = document.querySelectorAll('span[data-function="testMe"]')[3];
console.log(justicelige3);