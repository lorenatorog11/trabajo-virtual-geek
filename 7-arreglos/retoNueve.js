'use strict'

let arbol = [];
let altura = 5;
let triangulo = '▲';
for(let i = 1; i<altura+1;i++){
    arbol.push(triangulo);
    console.log(arbol.join(""));
}