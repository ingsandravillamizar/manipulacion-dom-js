
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');
const rtaSuma = document.querySelector('#rtaSuma');
const rtaResta = document.querySelector('#rtaResta');


btn.addEventListener('click',calculos);  //escucha el evento click, y se manda llamar la funcion No se debe colocar parentesis

//se debe enviar a la funcion la palabra event
function calculos(event) {
  let suma =  Number(input1.value) + Number(input2.value)
  rtaSuma.innerText = "la Suma es: " +  suma;

  let resta =  Number(input1.value) - Number(input2.value)
  rtaResta.innerText = "la Resta es: " +  resta;
}