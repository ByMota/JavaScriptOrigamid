// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// promessa.then(resolucao => {
//   console.log(resolucao);
// }).catch(reject => {
//   console.log(reject);
// });
// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// promessa.then(resolucao => {
//   console.log(resolucao);
// }, reject => {
//   console.log(reject);
// }).finally(() => {
//   console.log('Acabou'); // 'Acabou'
// });
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});
// const login = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Login Efetuado');
//   }, 1000);
// });
// const dados = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Dados Carregados');
//   }, 1500);
// });

// const tudoCarregado = Promise.race([login, dados]);

// tudoCarregado.then(respostas => {
//   console.log(respostas); // Array com ambas respostas
// });
