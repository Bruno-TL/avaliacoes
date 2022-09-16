//1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

let A = 5;
let B = 2;
let C = 5;

let soma = A + B;
if(soma < C){
    document.write(`A soma de A + B que é  ${soma} é menor que C = ${C}`)
    console.log(`A soma de A + B que é  ${soma} é menor que C = ${C}`)
}else {
    document.write(`A soma de A + B que é  ${soma} não é menor que C = ${C}`)
    console.log(`A soma de A + B que é  ${soma} não é menor que C = ${C}`)
}