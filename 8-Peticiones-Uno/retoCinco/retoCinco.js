let razas = [];
fetch('https://dog.ceo/api/breeds/list')
.then(list=>list.json())
.then(listRazas=>{
    razas = listRazas.message;
    let razasLength = razas.length-1;
    return razas, fetch('https://api.rand.fun/number/integer?max='+ razasLength)
})
.then(function(response) {    
        return response.json();  
    }
).then(function(data) {     
        num = data.result;
        let razaName = razas[num]
        document.querySelector('h1').innerHTML = `Esta es la raza ${razaName}`;
        return fetch ('https://dog.ceo/api/breed/' + razaName + '/images/random')     
})
.then(result=>result.json())
.then(image=>{
    const img = document.querySelector('img');
    img.src = image.message;
    img.alt = 'Perro';
    
})


