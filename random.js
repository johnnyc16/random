//Math.Random() devuelve número aleatorio entre 0 y 1
var numero = Math.Random();

var str = ' MAYOR que o.5';
if (numero >= 0.5){
  str = ' MENOR QUE 0.5');
}

console.log('\n' + numero + str + '\n');  
}
