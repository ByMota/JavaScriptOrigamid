var idade = 28;
var pi = 3.14;
var e = 2e5;
// operadores
var soma = 10 + 10;
var subtracao = 2-2;
var multiplicacao = 10 * 2;
var divisao = 5/5;
var modulo = 10%3;

// NaN - Not a Number
var nan = "Isso é um número 10?";
console.log(isNaN(nan));

// Unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6


var frase = "Vida longa";
+frase;
-frase;
console.log(+frase);

var idade = 19;
+idade;
-idade;  
console.log(-idade);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
//35
console.log(total);

// Crie duas expressões que retornem NaN
var nan1 = "Isso não é um número";
var nan2 = "10 é um número";


// Somar a string '200' com o número 50 e retornar 250
var somaDeString = +"200" + 50;
console.log(+somaDeString);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento3 = 5;
console.log(incremento3++);
console.log(`Incrementado fica ${incremento3}`);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso)
