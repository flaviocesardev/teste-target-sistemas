// 5) Escreva um programa que inverta os caracteres de um string. 

function inverterString(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

let stringInvertida = "teste";

console.log("String original:", stringInvertida);
console.log("String invertida:", inverterString(stringInvertida));
