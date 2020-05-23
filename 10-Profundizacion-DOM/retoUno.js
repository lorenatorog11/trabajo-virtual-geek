'use strict'
const numbers = [1, 2, 3]

for(let i=0; i<numbers.length; i++){
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    newItem.appendChild(newContent);

    const items = document.querySelector('.ul');
    items.appendChild(newItem);
}
