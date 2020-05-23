'use strict'

let arbol = ['★'];
let arbol2 = [];
let arbol3 = [];
let altura = 5;
let triangulo = '▲';

for(let i = 1; i<altura+1;i++){        
        arbol[i] = triangulo;
        triangulo = triangulo + '▲';
}
let espacio = ' ';
for(let i = altura+1; i>=0;i--){ 
    arbol2[i] = espacio;    
    espacio = espacio + ' ';
    
}
for(let i = 0; i<altura+1;i++){        
    arbol3[i] = arbol2[i].concat(arbol[i]);
}
for(let i = 1; i<altura+1;i++){        
    arbol3[i] = arbol3[i].concat(arbol[i]);
}

arbol3[arbol.length] = arbol2[0]+'|';

for(let i = 0; i<arbol3.length;i++){        
    console.log(arbol3[i]);
}


