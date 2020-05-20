function calculoIva (precio) {
    let iva = precio*0.21;
    let total = precio + iva;
    let result = `Precio sin iva: ${precio}, IVA: ${iva} y Total: ${total}`;
    return result;
}

const result = calculoIva(10);
console.log(result);