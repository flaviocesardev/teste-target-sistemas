// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificarFibonacci(numero) {
  let primeiro = 0;
  let segundo = 1;
  let proximo = primeiro + segundo;

  for (let i = 0; proximo <= numero; i++) {
    if (proximo === numero) {
      return true;
    }
    primeiro = segundo;
    segundo = proximo;
    proximo = primeiro + segundo;
  }

  return false;
}

let numeroVerificar = 13;

if (verificarFibonacci(numeroVerificar)) {
  console.log(`O numero ${numeroVerificar}, pertence à sequência de Fibonacci.`);
} else {
  console.log(`O numero ${numeroVerificar}, não pertence à sequência de Fibonacci.`);
}
