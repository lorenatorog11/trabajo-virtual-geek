'use strict'

let arbol = [];
let estrella = ['★'];
let altura = 5;
let triangulo = '▲';
console.log(estrella.join(""));
for(let i = 1; i<altura+1;i++){
    arbol.push(triangulo);
    console.log(arbol.join(""));
}
let tronco = ['|'];
console.log(tronco.join(""));