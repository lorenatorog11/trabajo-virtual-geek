
const enseñarChihuahua = () =>{
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response=>response.json())
    .then(data =>{
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Chihuahua';
});
}

document.querySelector('.button').addEventListener('click', enseñarChihuahua);