//10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
//umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
// 
//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
//com a tabela abaixo. 
//IMC em adultos Condição 
//Abaixo de 18,5 Abaixo do peso 
//Entre 18,5 e 25 Peso normal 
//Entre 25 e 30 Acima do peso 
//Acima de 30 obeso


let altura = 1.60;
let peso = 100;

let valorIMC = (peso / (altura * altura)).toFixed(1);

if (valorIMC < 18.5) {
    console.log(`Seu imc: ${valorIMC} >>> Abaixo do peso`);
    document.write(`Seu imc: ${valorIMC} >>> Abaixo do peso`)
}else if(valorIMC < 25){
    console.log(`Seu imc: ${valorIMC} >>> Peso normal`);
    document.write(`Seu imc: ${valorIMC} >>> Peso normal`)
}else if(valorIMC <= 30){
    console.log(`Seu imc: ${valorIMC} >>> Acima do Peso`);
    document.write(`Seu imc: ${valorIMC} >>> Acima do Peso`)
}else if(valorIMC > 30){
    console.log(`Seu imc: ${valorIMC} >>> Obeso(tu vai morrer)`);
    document.write(`Seu imc: ${valorIMC} >>> Obeso(tu vai morrer)`)
}