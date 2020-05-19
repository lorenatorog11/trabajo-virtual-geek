let contenedor = document.querySelector('.div');

if(contenedor.classList.contains('warning')){
    document.querySelector('h1').innerHTML = 'AVISO';
    document.querySelector('p').innerHTML = 'Tenga cuidado';
}else if(contenedor.classList.contains('error')){
    document.querySelector('h1').innerHTML = 'ERROR';
    document.querySelector('p').innerHTML = 'Ha surgido un error';
}else if(contenedor.classList.contains('success')){
    document.querySelector('h1').innerHTML = 'CORRECTO';
    document.querySelector('p').innerHTML = 'Los datos son correctos';
}