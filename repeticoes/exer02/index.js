//2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar : 
//a. A menor altura do grupo; 
//b. A maior altura do grupo;

let altura = [1.5, 1.6, 1.8, 1.2, 1.7, 1.3, 1.4, 1.5, 1.9, 2.0 , 2.2, 2.8, 2.9, 2.7, 2.4]


altura.sort(function(a, b){return a - b}) //Sort irá comparar todos os numeros 2 por vez e depois colocar em ordem crescente.

let maiorAltura = altura[0]
let menorAltura = altura[altura.length - 1]

console.log(`A maior altura do grupo: ${maiorAltura}`);
console.log(`A menor altura do grupo: ${menorAltura}`);

//let maior = Math.max(...altura); modo mais rápido de pegar o maior número
//let menor = math.min(...altura); e o menor número