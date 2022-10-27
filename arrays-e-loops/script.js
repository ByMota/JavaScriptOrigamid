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

videoGames.forEach(function(item, i, array){
  console.log(item, i, array)
});