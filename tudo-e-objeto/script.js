var nome = 'Vinicius';
var altura = 1.5;
var btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
  btn.classList.add('ativo');
  
})

// nomeie 3 propriedades ou métodos de strings

// toLowerCase() - transforma em minusculo
// fixed() - adiciona uma formatação ao texto;
// lenght - conta o número de caracteres;

// nomeie 5 propriedades ou métodos de elementos do DOM

var botao = document.querySelector('.btn');

// botao.addEventListener();
// botao.append(' cliquei');
// botao.innerHTML();
// botao.id();
// botao.outerHTML:


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var copiar = document.querySelector('.btn');
function copy(){
  var copyText = document.getElementById('label');
  copyText.select();
  navigator.clipboard.writeText(copyText.value)
}
copiar.addEventListener('click', copy )