//2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
//estado civil seja “CASADA”, solicitar o tempo de casada (anos).

let nome = 'Thalia';
let sexo = 'F';
let estadoCivil = 'casada';

if (sexo === 'F' && estadoCivil === 'casada'){
    let tempoDeCasada = prompt('Diga o seu tempo de casada(o) em anos.')
    console.log(`Seu tempo de casada(o) é ${tempoDeCasada} anos`) //Nã
    document.write(`Seu tempo de casada(o) é ${tempoDeCasada} anos`)
}else {
    console.log('Não caiu em nunhum condição')
};
