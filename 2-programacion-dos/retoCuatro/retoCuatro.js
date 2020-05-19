'use strict'

const totalCuenta = 128;
const numPersonas = 9; 

const cuentaPorPersonas = (totalCuenta - 2)/ numPersonas;
const cuentaAna = cuentaPorPersonas +2;
console.log(`Ana debe pagar ${cuentaAna}€`);
console.log(`Los demás pagan ${cuentaPorPersonas}€ cada uno`);