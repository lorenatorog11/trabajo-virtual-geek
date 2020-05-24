const links = document.querySelector('#nav');
const seleccionar =(event)=>{    
    event.preventDefault();
    let elemento = event.currentTarget;
    let dataID = elemento.getAttribute('data-id');
    let elementoa= document.getElementById(dataID);
    let position = elementoa.getBoundingClientRect();
    window.scrollTo(position.x, position.y-100);
    console.log(position);
}
links.querySelector('#enlace1').addEventListener('click',seleccionar);
links.querySelector('#enlace2').addEventListener('click',seleccionar);
links.querySelector('#enlace3').addEventListener('click',seleccionar);