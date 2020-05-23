
const buscarUsuario = () =>{
    let usuario = document.querySelector('input').value;
    let url = `https://api.github.com/users/${usuario}`;
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        let section = document.querySelector('section');
        let name = data.name;
        let src = data.avatar_url;
        let repositorios = data.public_repos;
        section.innerHTML = `<h1>Resultado</h1>
                             <p class="p">Nombre</p>
                             <p>${name}</p>
                             <p class="p">Foto</p>
                             <p><img src="${src}" width=300></p>
                             <p class="p">Número de repositorios</p>
                             <p>${repositorios}</p>`;
});
}

document.querySelector('.button').addEventListener('click', buscarUsuario);