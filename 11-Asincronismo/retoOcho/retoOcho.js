let btnContinuar = document.querySelector('#continuar');
let btnParar = document.querySelector('#parar');

let cronometro = null;
let contador =0;

const incrementarContador = () =>{    
    contador++;  
    let p = document.querySelector('p');
    p.innerHTML= contador;
    document.querySelector('body').appendChild(p);
}
        
let continuar =() => {
    cronometro = setInterval(incrementarContador, 1000);
}
let parar = ()=>{
    clearInterval(cronometro);
} 

btnParar.addEventListener('click', parar);
btnContinuar.addEventListener('click', continuar);