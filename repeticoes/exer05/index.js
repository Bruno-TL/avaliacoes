//5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
//Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos 
//números lidos. O número que encerrará a leitura será zero. 

let numeros = [2,3,4,5,6,7,8,0,48];
let par = 0;
let impar = 0;
let somaPar = 0;
let somaGeral = 0;


for(let n = numeros.length - 1; n >= 0 ; n--){
    somaGeral += numeros[n];
    if(numeros[n] % 2 === 0){
         par += 1;
         somaPar += numeros[n];
    }else{
        impar += 1;
    }
}
let mediaGeral = somaGeral / numeros.length;
let mediaPar = somaPar / par;


console.log(`Números pares: ${par}`);
document.write(`Números pares: ${par} <br>`);

console.log(`Números ímpares: ${impar}`);
document.write(`Números ímpares: ${impar} <br>`);

console.log(`Média dos valores dos numeros pares: ${mediaPar.toFixed()}`);
document.write(`Média dos valores dos numeros pares: ${mediaPar.toFixed()} <br>`);

console.log(`Média geral dos numeros lidos: ${mediaGeral.toFixed()}`);
document.write(`Média geral dos numeros lidos: ${mediaGeral.toFixed()} <br>`);
