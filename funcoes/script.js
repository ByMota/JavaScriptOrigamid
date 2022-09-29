function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado(4));//16
console.log(areaQuadrado(2));//2
console.log(areaQuadrado(5));//25

function pi(){
  return 3.14;
}

console.log(3 / pi());//0.955...

function imc(peso, altura){
  const imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.80));

function corFavorita(cor){
  if (cor === "Azul"){
    return 'Cor do Céu';
  }else if(cor === "verde"){
    return 'cor de planta';
  }else{
    return 'nada passou';
  }
}
console.log(corFavorita('Azul'))

//Argumentos podem ser funções, String, número e até função
addEventListener('click', function(){
  console.log("Clicado");                                             
});

function paisesVisitados(pais){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - pais}`;
}
console.log(paisesVisitados(10))

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

//Exercicio
// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor){
  if(!!valor){
    return 'Valor é Verdadeiro';
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(ladoQuadrado){
  const perimetro = ladoQuadrado * 4;
  return perimetro;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Vinicius', 'Mota'))

// Crie uma função que verifica se um número é par
function numeroPar(numero){
  if (numero % 2 == 0){
    return true;
  }else{
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
  return typeof dado;
}
console.log(tipoDado(true))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Vinicius');
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisitar(20),jaVisitei(20))
  precisoVisitar(20);
  
  jaVisitei(20);
