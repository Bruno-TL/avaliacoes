//6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são 
//VERDADEIROS ou FALSOS.

let a = false;
let b = false;

if(a === true && b === true) {
    console.log('Ambos são Verdadeiro');
    document.write(' Ambos são Verdadeiro');
}
if(a === false && b === true) {
    console.log('Um é falso e o outro é verdadeiro');
    document.write('Um é falso e o outro é verdadeiro');
}
if(a === false && b === false) {
    console.log('Ambos são Falso');
    document.write(' Ambos são Falso');
}
if(a === true && b === false) {
    console.log('Um é falso e o outro é verdadeiro');
    document.write('Um é falso e o outro é verdadeiro');
}