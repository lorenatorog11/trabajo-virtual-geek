let contador =0;
const incrementarContador = () =>{
    contador++;
    if(contador<=60){
        let p = document.querySelector('p');
        p.innerHTML= `Escrito hace ${contador} segundos`;
        if(contador === 60){
            p.innerHTML= `Escrito hace ${contador/60} minuto`;
        }  
    }  
}

setInterval(incrementarContador,1000);