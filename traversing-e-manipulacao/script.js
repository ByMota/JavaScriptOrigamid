// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy= document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(menu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
const dd = primeiroDT.nextElementSibling;
console.log(dd);
// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;