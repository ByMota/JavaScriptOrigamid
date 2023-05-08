var idade = 18;
temDiabetes = false;
// Operador ternário
// Não faz sentido retornar true ou false pois a propria operação ja retorna esse valores
var podeBeber = (idade >= 18 && !temDiabetes) ? 'Pode Beber' : 'Não Pode Beber'
console.log(podeBeber)

//If abreviado sem abrir chaves {}
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
// if(possuiCarro && possuiCasa)
//   darCredito = true;
// else
//   darCredito = false;

//
darCredito = (possuiCarro && possuiCasa);
console.log(darCredito)