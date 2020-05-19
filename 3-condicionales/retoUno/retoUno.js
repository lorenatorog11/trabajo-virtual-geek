const caja = document.getElementById('caja');
const link = 'http://placehold.it/300x300';
let vacio = 'http://www.fillmurray.com/300/300';

caja.innerHTML = `<img src="${(vacio || undefined || link)}">`