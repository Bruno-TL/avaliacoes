//4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
//somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
//atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.


let a = 10;
let b = 10;
let c = 0;

if (a === b){
    let soma = a + b ;
    c = soma;
    console.log(c);
}
if (a !== b){
    let multiplica = a * b;
    c = multiplica;
    console.log(c);
}