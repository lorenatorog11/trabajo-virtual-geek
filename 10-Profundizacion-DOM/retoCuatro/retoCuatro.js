'use strict'
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
let p1OffsetHeight = p1.offsetHeight;
let p2OffsetHeight = p2.offsetHeight;
let p3OffsetHeight = p3.offsetHeight;
let tercio1 = p1OffsetHeight/3;
let tercio2 = p2OffsetHeight/3;
let tercio3 = p3OffsetHeight/3;
p1.style.height = tercio1+'px';
p2.style.height = tercio2+'px';
p3.style.height = tercio3+'px';
