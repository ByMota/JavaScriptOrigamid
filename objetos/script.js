var pessoa = {
  nome: "Vinicius",
  idade: 19,
}

console.log(pessoa.nome)

var quadrado = {
  lados: 2,
  area: function(lado){ //tanto faz se tem function ou não
    return lado * lado;
  },
  perimetro(){
    return this.lados * 4; //this faz referência ao próprio objeto
  },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro())

console.log(Math.random())


var menu = {
  width: 800,
  metadeWidth(){
    return this.width / 2;
  }
}
menu.width = 500; //setando valor
menu.height = 500; //add propriedade
console.log(menu.height);
menu.clear = function(){  // add método
  console.clear()
}

//--------------

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var Dados =
{
  Nome: "Vinicius",
  Sobrenome: "Mota",

  NomeCompleto(){
    return `${this.Nome} ${this.Sobrenome}`;
  }
}


// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir: function(sexo){
    if (sexo === 'm'){
      return "latiu";
    }else{
      return 'nada'
    }
  }
}
