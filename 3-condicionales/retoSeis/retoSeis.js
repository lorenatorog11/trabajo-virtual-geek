let contenedor = document.querySelector('.div');

(contenedor.classList.contains('warning') === true) ? (document.querySelector('h1').innerHTML = 'AVISO', document.querySelector('p').innerHTML = 'Tenga cuidado') : (contenedor.classList.contains('error') === true)? (document.querySelector('h1').innerHTML = 'ERROR', document.querySelector('p').innerHTML = 'Ha surgido un error'): (contenedor.classList.contains('success')=== true)? (document.querySelector('h1').innerHTML = 'CORRECTO', document.querySelector('p').innerHTML = 'Los datos son correctos') : "";
