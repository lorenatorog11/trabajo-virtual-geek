const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector('ul');
list.innerHTML = `<li><p>${firstDogName}</p>
                  <img src="${firstDogImage}" width = "200"></li>
                  <li><p>${secondDogName}</p>
                  <img src="${secondDogImage}" width = "200"></li>
                  <li><p>${thirdDogName}</p>
                  <img src="${thirdDogImage}" width = "200"></li>`
