var graduacao = true;
var doutorado = false

if(doutorado){
  console.log("Tem doutorado");
}else if(!graduacao) {
  console.log("tem graduação");
}else{
  console.log("não tem nada");
}


// Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

// Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})


// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

//Operadores de Comparação
10 == '10'; //true
10 == 10; //true
10 === '10'; //false - tipos diferentes
10 === 10;  //true - tipos iguais
10 != 15; //true
console.log(10 != '10'); //false
10 !== '10'; //true

// E
true && true; //true
true && false; //false
false && true; //false
'gato' && 'cao'; //'cão' - vai retornar o ultimo
console.log((5 - 5) && (5 + 5)); //0 - 0 é um valor false, portanto ele não continua a operação
console.log((5 - 10) && (5 + 5));//nada retorna 0 , por fim retorna o ultimo

//OU
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

carro = 'não'

switch (carro){
  case 'SIM':
    console.log("SIM tenho carro");
    break
  case 'sim':
    console.log('sim tenho carro');
    break
  case 'não':
    console.log('não tenho')
    break
}