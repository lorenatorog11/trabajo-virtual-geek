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

// let secretLetter = 'y';
// function mySecretLetter() {
//   secretLetter = 'x';
//   return secretLetter;
// }
// console.log( mySecretLetter() ); // devuelve "x"
// console.log( secretLetter ); // devuelve "x"

// const button = document.querySelector('.alert'); //Seguir el elemento

// const showAlert = () => alert('Alerta');
// button.addEventListener('click',showAlert);
// //con function
// const button = document.querySelector('.alert');
// button.addEventListener('click', function showAlert() {
//    console.log('alerta');
// });

//como funcion flecha
// const button = document.querySelector('.alert');
// button.addEventListener('click', () => console.log('alerta'));

const buttonElement = document.querySelector('.button');

function evento (even) {
  console.log(even);
}

buttonElement.addEventListener('click', evento );



const plusOneButtonElement = document.querySelector('.button__add-one');

function handlePlusOneButton(event) {
  // Recogemos el elemento sobre el que pusimos el listener
  // y lo asignamos a una constante
const buttonElement = event.currentTarget;
console.log(event.currentTarget);
buttonElement.innerHTML = parseInt(buttonElement.innerHTML) + 1;
}

plusOneButtonElement.addEventListener('click', handlePlusOneButton);