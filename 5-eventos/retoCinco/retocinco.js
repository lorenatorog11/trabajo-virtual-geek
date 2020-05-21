const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

const changeInfo = (event) =>{
    const element = event.currentTarget;
    element.classList.toggle('teacher--selected');
    const subelement = element.querySelector('.favorite')
    if(subelement.innerHTML === 'Añadir'){
        subelement.innerHTML = 'Quitar';
    }else if (subelement.innerHTML === 'Quitar'){
        subelement.innerHTML = 'Añadir';
    }
}


isra.addEventListener('click', changeInfo);
tuerto.addEventListener('click', changeInfo);
nasi.addEventListener('click', changeInfo);
