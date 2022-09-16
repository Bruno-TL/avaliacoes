//9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
//calcule seu peso ideal, utilizando as seguintes fórmulas: 
//● para homens: (72.7 * h) – 58; 
//● para mulheres: (62.1 * h) – 44.7. 

let sexo = 'homens';
let alturaHom = 1.70;
let alturaMul = 1.60;


if(sexo === 'homens') {
    let pesoIdeal = (72.7 * alturaHom) - 58;
    console.log(parseInt(pesoIdeal));
    document.write(parseInt(pesoIdeal));
}else {
    if(sexo === 'mulheres') {
        let pesoIdeal = (62.1 * alturaMul) - 44.7;
        console.log(parseInt(pesoIdeal));
        document.write(parseInt(pesoIdeal));
    }
}




