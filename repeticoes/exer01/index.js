//1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
//três e que se encontram no conjunto dos números de 1 até 500. 

let numeros = [9 , 422, 32, 32, 54];

let soma = 0;

numeros.forEach( function(cada) {
    if(cada >= 1 && cada <= 500){
        if(cada % 2 === 1) {
            if (cada % 3 === 0){
            soma += cada       
            }
        }
    }
});
