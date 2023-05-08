function mostrarCarro(){
  carro = 'Fusca'
  console.log(carro)
}

mostrarCarro()
console.log(carro)
// O ideal é usar const ou let quando for declarar dento de um bloco
if(true){
  const carro = "vectra";
  console.log(carro);
}
console.log(carro)

{
  var carro = 'gol'; //Var Vasa do bloco
  const ano = 2018;
}
console.log(carro); // Carro
// console.log(ano); // erro ano is not defined

// Testando com for
var i = 50;
for(let i = 0; i < 5; i++) {
  console.log(`Número ${i}`);
}
console.log(i*50); // 5 - está vazando o i do loop

// Diferença de const e let

//const Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código
const mes = 'Dezembro';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona, consigo adicionar propriedades no const
//data = 'Janeiro'; // erro, não posso alterar o tipo ou valor


//let Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
{let ano
ano = 2018;
ano++;
console.log(ano); // 2019
}
//let ano = 2020; // erro, redeclarou a variável

// Exercicio
console.log('Exercicio')
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(var, marca, portas); //Não estou chamando a variável, marcas e portas não vazam para fora do bloco 

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {//com let a variavel numero não é reatribuida fora do bloco
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
