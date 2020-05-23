'use strict'

const elegir = ()=>{
    let ciudad = document.querySelector('select');
    if(ciudad.value === 'Madrid'){
        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        img1.src = 'https://www.avianca.com/content/dam/avianca_new/destinos/mad/mad_banner_madrid.jpg';
        img2.src = 'https://estaticos.elperiodico.com/resources/jpg/9/0/ayuntamiento-1561708525409.jpg';
        img3.src = 'https://www.miradormadrid.com/wp-content/uploads/2014/10/Plaza-de-Espa%C3%B1a-21.jpg';
    } else if(ciudad.value === 'Paris'){
        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        img1.src = 'https://i2.wp.com/redhistoria.com/wp-content/uploads/2019/03/historia-de-la-torre-eiffel.jpg?w=820&ssl=1';
        img2.src = 'https://www.viajejet.com/wp-content/viajes/el-arco-del-triunfo-en-paris-francia-818x460.jpg';
        img3.src = 'https://viajes.nationalgeographic.com.es/medio/2016/01/24/337620b7louvre.jpg';
    }else if(ciudad.value === 'New York'){
        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        img1.src = 'https://blog.universaldeidiomas.com/wp-content/uploads/2018/04/Frases-y-expresiones-en-ingl%C3%A9s-para-desenvolverte-en-New-York-300x199.jpg';
        img2.src = 'https://www.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-352/nueva-york-panoramica-a.jpg';
        img3.src = 'https://www.infobae.com/new-resizer/T2dIAp0zIIFhseijNfx6ZZbRZos=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/22190452/Nueva-York-1920-2.jpg';
    }
}

document.querySelector('.submit').addEventListener('click',elegir);