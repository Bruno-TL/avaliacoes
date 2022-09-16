//3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
//média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
//negativos e o percentual de valores negativos e positivos.



let numeros = [8, 7, 4, 5];

let soma = 0;

for(let n = 0; n < numeros.length; n++) {
    soma += numeros[n]
}

let media = soma / numeros.length;

console.log(media)

let numerosPositivos = 0;
let numerosNegativos = 0;
numeros.forEach(function (cada){
     if(cada >= 0){
        numerosPositivos += 1

    }else if(cada < 0) {
        numerosNegativos += 1
    }
}
);

//testar 

console.log(numerosPositivos)
console.log(numerosNegativos)

//falta as porcentagem

let qte_positivos = (numerosPositivos - numerosNegativos) * 100;
let qte_negativos = (numerosNegativos - numerosPositivos) * 100;

console.log(qte_positivos)
console.log(qte_negativos)