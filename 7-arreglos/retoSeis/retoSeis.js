'use strict'

const button = document.querySelector('#submit')

const enviar = ()=>{
    let movies = [document.querySelector('#campo1').value, document.querySelector('#campo2').value];
    for (const movie of movies ){
        console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana`)
    }
}



button.addEventListener('click', enviar);