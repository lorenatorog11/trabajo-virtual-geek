'use strict'

const list =[
    {
        name:'Maria',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química',
    },
    {
        name: 'Susana',
        age: 34,
        job: 'Periodista',
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'Diseñadora',
    },
];

const countGeekGirls = (listado)=>{
    console.log(`En el listado hay ${listado.length} geek girls`);
}

const averageAge = (listado)=>{
    let contador = 0;    
    for (let i = 0; i<listado.length; i++){
        contador = contador + listado[i].age;
    }
    let media = contador/listado.length;
    console.log(`La edad promedio de las geek girls es: ${media}`)
}

const theYoungest = (listado)=>{
    let contador = listado[0].age;
    let index = 0;
    for (let i = 0; i < listado.length; i++) {
        if(listado[i].age<contador){
            contador = listado[i].age;
            index = i;
        }        
    }
    console.log(`La geek girl más joven es ${listado[index].name}`);
}

const countDesigners = (listado)=>{
    let contador = 0;
    for (let i = 0; i < listado.length; i++) {
        let profesion = (listado[i].job).toLowerCase();
        if(profesion === 'diseñadora'){
            contador++;
        }        
    }
    console.log(`Hay ${contador} geek girls diseñadoras`);
}

countGeekGirls(list);
averageAge(list);
theYoungest(list);
countDesigners(list);