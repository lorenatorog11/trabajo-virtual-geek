'use strict'
const persons = [
    {
        name: 'Sussana',
        lastName: 'Berrio',
        phone: 5544882
    }, 
    {
        name: 'Juana',
        lastName: 'Sanchez',
        phone: 2589634
    }, 
    {
        name: 'Luciana',
        lastName: 'Ruiz',
        phone: 4713652
    }
]

const consultar = ()=>{
    let nameSelect = document.querySelector('select').value;
    for(let i =0; i<persons.length; i++){
        if(nameSelect === persons[i].name){
            let inputLastName = document.querySelector('#lastName');
            let inputPhone = document.querySelector('#phone');
            inputLastName.value=persons[i].lastName;
            inputPhone.value=persons[i].phone;
        }
    }
}

document.querySelector('button').addEventListener('click',consultar);