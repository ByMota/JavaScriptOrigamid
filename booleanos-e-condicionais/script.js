var graduacao = true;
var doutorado = false

if(doutorado){
  console.log("Tem doutorado");
}else if(graduacao) {
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
