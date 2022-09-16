//3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
//média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
//negativos e o percentual de valores negativos e positivos.



let numeros = [8, 7, 4, 5];

let soma = 0;

for(let n = 0; n < numeros.length; n++) {
    soma += numeros[n]
}

let media = soma / numeros.length;

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

let porcentagemPositivos = (numerosPositivos/numeros.length) * 100;
let porcentagemNegativos = (numerosNegativos/numeros.length) * 100;

console.log(`A media dos aritmética: ${media}`);
console.log(`Numeros positivos: ${numerosPositivos}`);
console.log(`Numeros negativos:${numerosNegativos}`)
console.log(`Porcentagem de numeros Positivos: ${porcentagemPositivos}%`)
console.log(`Porcentagem de numeros Negativos: ${porcentagemNegativos}%`)

document.write(`A media dos aritmética: ${media} <br>`)
document.write(`Numeros positivos: ${numerosPositivos} <br>`)
document.write(`Numeros negativos:${numerosNegativos} <br>`)
document.write(`Porcentagem de numeros Positivos: ${porcentagemPositivos}% <br>`)
document.write(`Porcentagem de numeros Negativos: ${porcentagemNegativos}%`)