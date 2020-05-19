let name = 'Alejandra';

if(name === 'Lorena' || name === 'Johana'){
    document.querySelector('h1').innerHTML = `Bienvenida, ${name}`
}else{
    document.querySelector('h1').innerHTML = `Lo siento pero el usuario que has introducido no está registrado`
}