const { Console } = require('console');
var readlineSync = require('readline-sync');



let cab = function (texto){

}
console.log("========= CALCULADORA BÁSICA: ===========")
console.log("|             1 - SOMA                  |")
console.log("|             2 - SUBTRAÇÃO             |")
console.log("|             3 - MULTIPLICAÇÃO         |")
console.log("|             4 - DIVISÃO               |")
console.log("=========================================")
console.log("")

let x = readlineSync.question("Escolha uma das opcoes: ");

console.log(x);
console.log("")

let soma = function(a, b){
    return(a+b)
}

let sub = function(a, b){
    return(a-b)
}

let mult = function(a, b){
    return(a*b)
}

let div = function(a, b){
    return(a/b)
}

if (x == 1){
    
   
    console.log("Operação escolhida => Adição.")
    console.log("")
    let a = readlineSync.question("Digite o primeiro numero: ");
    let b = readlineSync.question("Digite o segundo numero: ");
    console.log("A soma entre " + a + " e " + b + " é igual a " + soma(parseFloat(a.replace(",",".")),parseFloat(b.replace(",","."))) + ".")
} else if(x == 2) {
    
    console.log("Operação escolhida => Subtração.")
    console.log("")
    let a = readlineSync.question("Digite o primeiro numero: ");
    let b = readlineSync.question("Digite o segundo numero: ");
    console.log("A subtração entre " + a + " e " + b + " é igual a " + sub(parseFloat(a.replace(",",".")),parseFloat(b.replace(",","."))) + ".")
} else if(x == 3) {
   
    console.log("Operação escolhida => Multiplicação.")
    console.log("")
    let a = readlineSync.question("Digite o primeiro numero: ");
    let b = readlineSync.question("Digite o segundo numero: ");
    console.log("O produto entre " + a + " e " + b + " é igual a " + mult(parseFloat(a.replace(",",".")),parseFloat(b.replace(",","."))) + ".")
}

if (x == 4){
    
    console.log("Operação escolhida => Divisão.")
    console.log("")
    let a = readlineSync.question("Digite o primeiro numero: ");
    let b = readlineSync.question("Digite o segundo numero: ");
    console.log("A divisão entre " + a + " e " + b + " é igual a " + div(parseFloat(a.replace(",",".")),parseFloat(b.replace(",","."))) + ".")
    

while (b == 0){
    console.log("Não é possível dividir por zero, escolha outro número.")
    let b = readlineSync.question("Digite novamente o segundo numero: ");
     if (b != 0){
    console.log("")
    console.log("A divisão entre " + a + " e " + b + " é igual a " + div(parseFloat(a.replace(",",".")),parseFloat(b.replace(",","."))) + ".")
    break
} 
    }
}
