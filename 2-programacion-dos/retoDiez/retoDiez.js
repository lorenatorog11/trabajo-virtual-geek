'use strict'

const edad = document.querySelector('.age').textContent;

const horasPorAño = 8760; 

const horasVividas = parseInt(edad) * horasPorAño;

console.log(`Se han vivido ${horasVividas} horas`);
