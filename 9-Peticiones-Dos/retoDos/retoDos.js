function buscarName () {
    let name = document.querySelector('.text').value;
    fetch('https://swapi.dev/api/people/?search='+name)
    .then(data=>data.json())
    .then(busqueda =>{
        let result = busqueda.results;
        let li = '';
        for(let i = 0; i<result.length; i++){
            let personaje = `<li>Nombre:${result[i].name}, Edad:${result[i].birth_year} </li>`
            li+= personaje;
        }
        document.querySelector('ul').innerHTML = li;
    })

}

document.querySelector('.submit').addEventListener('click', buscarName);