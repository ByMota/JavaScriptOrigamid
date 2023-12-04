// // Mostre no console cada parágrado do site
// const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach((item)=> console.log(item));
// // Mostre o texto dos parágrafos no console
// paragrafos.forEach((item)=> console.log(item.innerText));
// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( () => {
//   console.log(i++)
// });

// imgs.forEach(() => i++);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function ativo(event){
//   event.preventDefault();
//   linksInternos.forEach((item) => {
//     item.classList.remove('ativo')
//   });
//   event.currentTarget.classList.add("ativo");
// }

// linksInternos.forEach((link) => {
//   link.addEventListener('click', ativo);
// })

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll('body *');


// function elementoClicado(event){
//   console.log(event.currentTarget);
// }
// todosElementos.forEach((item) => {
//   item.addEventListener('click', elementoClicado);
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const todosElementos = document.querySelectorAll('body *');

// function elementoClicado(event){
//   event.currentTarget.remove();
//   console.log(event.currentTarget);
// }
// todosElementos.forEach((item) => {
//   item.addEventListener('click', elementoClicado);
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event){
  if(event.key === 't'){
    console.log('clicou t')
    document.documentElement.classList.toggle('textogrande')

  }
}

window.addEventListener('keydown', handleClickT);