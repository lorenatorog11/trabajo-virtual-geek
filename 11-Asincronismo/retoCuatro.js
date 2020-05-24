let contador =0;

const incrementarContador = () =>{
    contador++;
    if(contador<=12){
        let p = document.querySelector('p');
        p.innerHTML= contador;
        document.querySelector('body').appendChild(p);
    }    
}

setInterval(incrementarContador,1000);