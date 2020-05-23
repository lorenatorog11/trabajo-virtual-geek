const numbers = [5,8,9,6,3]

let contador = 0;

for (let i = 0; i < 5; i++) {
    contador+=numbers[i];    
}
let media = contador/5;
console.log(media);

const numbers2 = [5,8,9,6,3,3]

let contador2 = 0;

for (let i = 0; i < 6; i++) {
    contador2+=numbers2[i];    
}
let media2 = contador2/6;
console.log(media2);


function average (number){
    let contador3 = 0;
    for (let i = 0; i < number.length; i++) {
        contador3+=number[i];    
    }
    let media = contador3/number.length;
    console.log(media);
}

average(numbers);