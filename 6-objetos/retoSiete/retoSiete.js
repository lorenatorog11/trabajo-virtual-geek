'use strict'

const usuario = {};
const job = 'developer';

usuario.firstName = 'Lorena',
usuario.lasttName = 'Toro',
usuario.age = 26,
usuario.job = job,

console.log(usuario);

usuario.firstName = 'Luciana',
usuario.age = usuario.age + 1,

console.log(usuario);