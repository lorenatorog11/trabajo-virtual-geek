const year = 3;
if(year%4 === 0){
    console.log(`${year} es un año bisiesto`)
}else if(year%4 !== 0){
    let modulo = (year/4)+0.25;
    let bisiesto = 4 * Math.round(modulo);
    console.log(`El proximo año bisiesto es ${bisiesto}`);
}