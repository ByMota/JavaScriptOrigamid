const doc = fetch('https://viacep.com.br/ws/05134260/json/')
doc
.then(r => r.json())
.then(body => {
  console.log(body)
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body.logradouro
  // conteudo.innerText = body
})