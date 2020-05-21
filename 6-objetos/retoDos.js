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

geekGirl1.run = () =>{
    console.log('Estoy corriendo');
} 
geekGirl1.runAMarathon = (distance) =>{
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
}

geekGirl1.run();
geekGirl1.runAMarathon(50);