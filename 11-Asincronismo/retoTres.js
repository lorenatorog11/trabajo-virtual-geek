let contador =0;

const incrementarContador = () =>{
    contador++;
    let p = document.querySelector('p');
    p.innerHTML= contador;
    document.querySelector('body').appendChild(p);
}

setInterval(incrementarContador,2000);