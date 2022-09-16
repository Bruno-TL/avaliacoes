//8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
//decrescente.

let num = [1, 2, 3];

for(let n = num.length - 1; n >= 0; n--){
    console.log(num[n])
    document.write(`${num[n]} <br>`)
}

document.write('<hr>')
//caso os números da variável seja aleatório; 

let num2 = [2, 30, 4];

num2.sort(function(a, b){return b - a});
for(let n = 0; n < num2.length; n++){
    console.log(num2[n])
    document.write(`${num2[n]} <br>`)
}