let btnContinuar = document.querySelector('#continuar');
let btnParar = document.querySelector('#parar');

let cronometro = null;
let contador =0;

const incrementarContador = () =>{
    let p = document.querySelector('p');
    p.innerHTML = '¿Te has dormido?'; 
    
}
     
let continuar =() => {
    cronometro = setTimeout(incrementarContador, 4000);
}



btnContinuar.addEventListener('click', continuar);
