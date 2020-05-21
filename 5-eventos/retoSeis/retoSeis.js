const body = document.querySelector('#body');

const changeColor = (event)=>{
    const evento = event;
    if(evento.code === 'KeyR'){
        body.classList.add('red')
        body.classList.remove('purple')
    }else if(evento.code === 'KeyM'){
        body.classList.add('purple')
        body.classList.remove('red')
    }else{
        body.classList.remove('red','purple')
    }
}

body.addEventListener('keypress', changeColor);