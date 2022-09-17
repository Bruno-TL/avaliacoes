//11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal deetiqueta e a escolha da condição de 
//pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
//Código Condição de pagamento 
//1 À vista em dinheiro ou cheque, recebe 10% de desconto 
//2 À vista no cartão de crédito, recebe 15% de desconto 
//3 Em duas vezes, preço normal de etiqueta sem juros 
//4 Em duas vezes, preço normal de etiqueta mais juros de 10%


let tipoDePagamento = 'duas vezes'; //ou duas vezes
let tipoDeAVista = 'cartão de crédito'; //ou cheque ou cartão de crédito
let valor = 50;
let parceladoEmDuas = 'com juros' ;// sem juros

if((tipoDePagamento === 'a vista' && tipoDeAVista === 'dinheiro') || tipoDePagamento === 'a vista' && tipoDePagamento === 'cheque') {
    const desconto = valor - (valor  / 10);
    console.log(`À vista em dinheiro ou cheque, recebe 10% de desconto. Ex: valor:${valor} dolares, depois do desconto > ${desconto} dolares `);
    document.write(`À vista em dinheiro ou cheque, recebe 10% de desconto. <br> Ex: valor: ${valor} dolares depois do desconto > ${desconto} dolares `);

} else if(tipoDePagamento === 'a vista' && tipoDeAVista === 'cartão de crédito'){
    const desconto = valor - ((valor * 15) / 100);
    console.log(`À vista no cartão de crédito, recebe 15% de desconto. Ex: valor:${valor} dolares, depois do desconto > ${desconto} dolares `);
    document.write(`À vista no cartão de crédito, recebe 15% de desconto. Ex: valor:${valor} dolares, depois do desconto > ${desconto} dolares`);

} else if(tipoDePagamento === 'duas vezes' && parceladoEmDuas === 'sem juros'){
    console.log(`Parcelado em duas vezes sem juros.`);
    document.write(`Parcelado em duas vezes sem juros.`)
    
} else if(tipoDePagamento === 'duas vezes' && parceladoEmDuas === 'com juros'){
    const juros = valor + (valor / 10);
    console.log(`Parcelado em duas vezes com juros de 10%. Ex: valor:${valor} dolares, depois do acrescimo > ${juros} dolares`);
    document.write(`Parcelado em duas vezes com juros de 10%. Ex: valor:${valor} dolares, depois do acrescimo > ${juros} dolares`)
}





