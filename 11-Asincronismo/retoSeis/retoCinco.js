const mostrarMensaje = () =>{
    let body = document.querySelector('body');
    body.innerHTML = 'Su sesión ha expirado';
 
}

setTimeout(mostrarMensaje,15000);