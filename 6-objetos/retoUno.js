'use strict'

const geekGirl1 = {
    name: 'Susana',
    age: 34,
    job : 'Periodista', 
}
const geekGirl2 = {
    name: 'Rocío',
    age: 25,
    job : 'Actriz', 
}

document.querySelector('#text1').innerHTML = `Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.job}`;
document.querySelector('#text2').innerHTML = `Mi nombre es ${geekGirl2.name}, tengo ${geekGirl2.age} años y soy ${geekGirl2.job}`;