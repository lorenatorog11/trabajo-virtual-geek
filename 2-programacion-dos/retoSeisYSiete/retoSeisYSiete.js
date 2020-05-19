'use strict'

const name = 'Johana';
const saludo = 'Hola ';
const mensaje = ', encantada de conocerte.';
const ver = document.querySelector('.saludo');

ver.innerHTML = saludo + name + mensaje;

const interpolacion = document.querySelector('.interpolacion');

interpolacion.innerHTML = `${saludo} ${name} ${mensaje}`;
