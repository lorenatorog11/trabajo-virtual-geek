let contador =0;

const incrementarContador = () =>{
    contador++;  
    let p = document.querySelector('p');
    p.innerHTML= contador;
    document.querySelector('body').appendChild(p);
    if(contador === 12){
        clearInterval(funcion);
    }    
}

let funcion = setInterval(incrementarContador,1000);