var videoGames = ['Switch', 'PS4', 'XBOX'];

// videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// for (var numero = 0; numero <= 10; numero++){
//   console.log(numero)
// }

// var i = 0
// while(i < 10){
//   console.log(i)
//   i++
// }

// for(var item = 0; item < videoGames.length; item++)
// {
//   console.log(videoGames[item])
// }

// for(var item = 0; item < videoGames.length; item++)
// {
//   console.log(item)
//   console.log(videoGames[item])
//   if (videoGames[item] === 'xbox'){
//     break;
//   }
// }

// videoGames.forEach(function(item, i, array){
//   console.log(item, i, array)
//   videoGames.pop();
//   console.log(item, i, array)
// });

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var ano = 0; ano < copa.length; ano++){
  console.log(`O Brasil ganhou a copa em ${copa[ano]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta])
  if(frutas[fruta] === 'Pera'){
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta2 = frutas[frutas.length -1];
console.log(`A ultima fruta é ${ultimaFruta2}`);

for(fruta = 0; fruta < frutas.length; fruta++){
  if(frutas[fruta] === 'Melância'){
    var ultimaFruta = frutas[fruta];
    console.log(`A ultima fruta é ${ultimaFruta}`);
  }
}
