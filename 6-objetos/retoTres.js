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

geekGirl1.showBio = function (){
    alert(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`)
}
geekGirl2.showBio = function (){
    alert(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`)
}

geekGirl1.showBio();
geekGirl2.showBio();