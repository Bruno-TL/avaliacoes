//2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar : 
//a. A menor altura do grupo; 
//b. A maior altura do grupo;

let altura = [1.5, 1.6, 1.8, 1.2, 1.7, 1.3, 1.4, 1.5, 1.9, 2.0 , 2.2, 2.8, 2.9, 2.7, 2.4];


let alturaMaxima = 0;
let alturaMinima = altura.length;//Tenhe que ser um numero maior que zero, pra não ser um numero fixo coloquei "lenght" ja que especifica que a lista vai ter muitas alturas.


for(let i = 0; i < altura.length; i++){
    if(altura[i] > alturaMaxima){
        alturaMaxima = altura[i];
    }
    
    if(altura[i] < alturaMinima){
        alturaMinima = altura[i];
    }
}

console.log(`Altura máxima: ${alturaMaxima}`);
document.write(`Altura máxima: ${alturaMaxima} <br>`);

console.log(`Altura mínima: ${alturaMinima}`);
document.write(`Altura mínima: ${alturaMinima}`)