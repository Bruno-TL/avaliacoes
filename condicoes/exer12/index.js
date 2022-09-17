//12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
//3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
//aproveitamento, usando a fórmula: 
//MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
//A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
//suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
//mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
//Média de aproveitamento Conceito 
//>= 90 A 
//>= 75 e < 90 B 
//>= 60 e < 75 C 
//>= 40 e < 60 D 
//< 40 E

let numeroID = 1;

let nota1 = 80;
let nota2 = 90;
let nota3 = 90;

let ME = parseInt((nota1 + nota2 + nota3) / 3);
let MA = parseInt((nota1 + nota2 * 2 + nota3 * 2 + ME)/ 7);

console.log(`Seu Identificador ${numeroID} 
            Suas notas: ${nota1}, ${nota2},  ${nota3}
            Sua médias de exercícios: ${ME}
            Sua média de aproveitamento: ${MA}
`)

document.write(`Seu Identificador ${numeroID} <br> 
                Suas notas: ${nota1}, ${nota2},  ${nota3} <br>
                Sua médias de exercícios: ${ME} <br>
                Sua média de aproveitamento: ${MA} <br>
` )



if(MA < 40 ){
    console.log(`Reprovado com o conceito: E `);
    document.write(`Reprovado com o conceito: E`)
}else if(MA < 60){
    console.log(`Reprovado com o conceito: D`);
    document.write(`Reprovado com o conceito: D`);
}else if(MA < 75){
    console.log(`Aprovado com o conceito: C`);
    document.write(`Aprovado com o conceito: C`);
}else if(MA < 90){
    console.log(`Aprovado com o conceito: B`);
    document.write(`Aprovado com o conceito: B`);
}else if(MA >= 90) {
    console.log(`Aprovado com o conceito: A`);
    document.write(`Aprovado com o conceito: A`);
}

