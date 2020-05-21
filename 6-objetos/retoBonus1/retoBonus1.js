const update = document.querySelector('#submit');
update.addEventListener('click', () =>{
    const emoji = document.querySelector('select').value;
    document.querySelector('#smile').innerHTML= emoji;
    const aleatorio = document.querySelector('#aleatorio').innerHTML= (Math.random()*100).toFixed(0);
    if(aleatorio%2 !==0){
        document.querySelector('body').classList.add('orange');
    }else{
        document.querySelector('body').classList.remove('orange');
    }
})