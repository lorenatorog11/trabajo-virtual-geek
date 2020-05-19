let edad = 12;

if(edad <=1 && edad>0){
  let edadHumana = edad * 15;
  document.querySelector('h1').innerHTML= `La edad del perro es ${edadHumana} años`;
}else if(edad>1 && edad<=2){
  let edadHumana = 15 + ((edad-1) *9);
  document.querySelector('h1').innerHTML= `La edad del perro es ${edadHumana} años`;
}else if(edad > 2){
  let edadHumana = 15 + 9 + ((edad-2)*5);
  document.querySelector('h1').innerHTML= `La edad del perro es ${edadHumana} años`;
}