
const buscarUsuario = () =>{
    let usuario = document.querySelector('input').value;
    let url = `https://api.github.com/orgs/${usuario}`;
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
       const repos = data.repos_url;
       return fetch(repos);
    })
    .then( listRepositorio => listRepositorio.json())
    .then(list => {
        const ul = document.querySelector('ul');
        let nameRepos = "";
        for(let i= 0; i<list.length ; i++){
            let name = list[i].name;
            let li = `<li>${name}</li>`;
            nameRepos+=li;
        
        }
        ul.innerHTML = nameRepos;
        
    })
}

document.querySelector('.button').addEventListener('click', buscarUsuario);