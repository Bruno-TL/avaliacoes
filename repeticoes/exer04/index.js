//4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles 
//estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve 
//terminar quando for lido um número negativo. 

let numeros = [1,2,37,35,53,65,-1,78,85];

let intervalo0_25 = 0;
let intervalo26_50 = 0;
let intervalo51_75 = 0;
let intervalo76_100 = 0;

let n = 0
while( n < numeros.length){
    if (numeros[n] < 0){
        console.log(`Terminou a entrada de dados, foi lido um número negativo: ${numeros[n]}`);
        document.write(`Terminou a entrada de dados, foi lido um número negativo: ${numeros[n]} <br>`);
        break;
    }else if(numeros[n] >= 0 && numeros[n] <=25 ) {
        intervalo0_25 += 1;
        n++;
    }else if(numeros[n] >= 26 && numeros[n] <= 50) {
        intervalo26_50 += 1;
        n++;
    }else if(numeros[n] >= 51 && numeros[n] <= 75) {
        intervalo51_75 += 1;
        n++;
    }else if (numeros[n] >= 76 && numeros[n] <= 100){
        intervalo76_100 += 1;
        n++;
    }
    
}

console.log(`Total de numeros no intervalo de [0-25] : ${intervalo0_25} <br>`);
document.write(`Total de numeros no intervalo de [0-25] : ${intervalo0_25} <br>`);

console.log(`Total de numeros no intervalo de [26-50] : ${intervalo26_50} <br>`);
document.write(`Total de numeros no intervalo de [26-50] : ${intervalo26_50} <br>`);

console.log(`Total de numeros no intervalo de [51 -75] : ${intervalo51_75} <br>`);
document.write(`Total de numeros no intervalo de [51 -75] : ${intervalo51_75} <br>`);

console.log(`Total de numeros no intervalo de [76 - 100] : ${intervalo76_100} <br>`);
document.write(`Total de numeros no intervalo de [76 - 100] : ${intervalo76_100} <br>`);