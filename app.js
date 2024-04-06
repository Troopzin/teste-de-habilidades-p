alert('Boas vindas ao Jogo do Lucas')
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
        
    } 
    else{
        alert('Você errou lerdão, tente de novo!')
    if (chute > numeroSecreto)
        alert(`Uma dica seu jumento: o número secreto é menor que ${chute}`);
    if (chute < numeroSecreto)
    alert(`Uma dica seu energúmeno: o número secreto é maior que ${chute}`);
    tentativas++;

    }
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    alert(`Boa 06, você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



