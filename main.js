'use strict';
document.querySelector('h1').innerHTML = '¡Hola mundo!';

let officeAddress = 'Calle Leganitos, 24';

let totalHours;
totalHours = 10 + 20 + 30;

let earnings = 12020;
let expenses = 5342;
let benefits = earnings - expenses;

const officeAddress1 = 'Calle Leganitos, 24';

//selector de etiqueta

const mainTitle = document.querySelector('h1');

//selectos de id

const mainTitle1 = document.querySelector('#mainTitle');

//selector de clase

const mainTitle2 = document.querySelector('.mainTitle');

//modificar el contenido de un elemento HTML

mainTitle.innerHTML = 'Bienvenida';

mainTitle.innerHTML = mainTitle.innerHTML + ', geek girl';

//Agregar etiquetas de html desde JS
const listElement = document.querySelector('.list');

const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

listElement.innerHTML = content;


// const secretLetter = 'y';
// function mySecretLetter() {
//   return secretLetter;
// }
// console.log( mySecretLetter() ); // devuelve "y"
// console.log( secretLetter ); // devuelve "y"

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log( mySecretLetter() ); // devuelve "x"
console.log( secretLetter ); // devuelve "x"