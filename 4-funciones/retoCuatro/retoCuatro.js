function calculadorCaja (booleano, anchoCaja, padding, borde){
    if(booleano === 'border-box'){
        let width = anchoCaja;
        return width;
    }else if (booleano === 'content-box'){
        let width = anchoCaja + 2*padding+ 2*borde;
        return width;
    }
}

console.log(calculadorCaja('content-box', 100, 5, 1));
console.log(calculadorCaja('border-box', 100, 5, 1));