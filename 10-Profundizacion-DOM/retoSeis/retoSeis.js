'use strict'
const body = document.body;
body.style= 'background-color: black; color:white; font-family: sans-serif;';

for ( let i = 0; i<100;i ++ ){
    const parrafo = document.createElement('p');    
    const text = document.createTextNode('He aprendido bien cómo funcionan los bucles');
    const select = document.createElement('select');
    parrafo.appendChild(text);
    parrafo.id = "p"+i;
    select.id = "select"+i;
    body.appendChild(parrafo);    
    
    for(let i = 0; i<6;i ++ ){
        let colors =['Blanco', 'Azul', 'Rojo', 'Verde', 'Amarillo', 'Rosa'];
        const textOpcion = document.createTextNode(colors[i]);
        const option = document.createElement('option');        
        select.appendChild(option);  
        option.appendChild(textOpcion);
        option.value = colors[i];
        if( i === 0){
            option.setAttribute('selected','');
        }
    }
    body.appendChild(select);   
}

for(let i=0; i<100; i++){
    const list = document.querySelector('#select'+i);
    const cambiar = (event) =>{
        let indice = event.target.selectedIndex;
        let p = document.querySelector('#p'+i);
        switch (indice) {
            case 0:
                p.style='color:white;'
                break;
            case 1:
                p.style='color:blue;'
                break;
            case 2:
                p.style='color:red;'
                break;
            case 3:
                p.style='color:green;'
                break;
            case 4:
                p.style='color:yellow;'
                break;
            case 5:
                p.style='color:pink;'
                break;
    
        }
    }
    
    list.addEventListener('change', cambiar);
}




