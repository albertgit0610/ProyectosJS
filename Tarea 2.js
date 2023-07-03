// Algoritmo para calcular la distancia recorrida por un carro que mantenía movimiento constante (d = v x t).

function calculatedistacia(speed,time) {
  const distancia = (speed * time)
  let message = `la distancia recorrida es de ${distancia}`
  console.log(message);
  return message
}
console.log(calculatedistacia(23,12));

// Algoritmo para calcular el tiempo transcurrido por un carro que mantenía movimiento constante desplazandose a un lugar (t = d / v).

function calculatetiempo(distance,speed) {
  const time = ((distance / speed))
  let message = `el tiempo que se demora en llegar la distancia es de ${time}`
  console.log(message);
  return message
}
console.log(calculatetiempo(46,23));;

// Algoritmo para calcular la velocidad a la recorria un carro que mantenía movimiento constante a cierta distancia a través del tiempo (v = d / t).

function calculatevelocidad(time,distance){
  const velocidad = (distance)/(time)
  let message = `la velocidad es de ${velocidad} M/S`
  console.log(message)
  return Math.round((velocidad) * 100) / 100
}
console.log(calculatevelocidad(70,100));

// Algoritmo que me permita escribir un número y muestre la tabla de multiplicar de ese número (1 - 12).

function tablademultiplic(tabla) {
  for (let multipli = 1; multipli <= 1; multipli++) {
      let message = ` tabla del ${multipli}`;
      for (let multiplic = 1; multiplic <= 12; multiplic++) {
      console.log(`${multipli} x ${multiplic} = ${multipli * multiplic}`);
      }
      return message;
      }
  }
  console.log(tablademultiplic(12));

// Algoritmo que me permita escribir un número decimal y me retorne el número convertido en binario.
//(int = 50; out = 110010)

function decimalToBinary(number) {
  var decimal = '';
  while (number > 0) {
      decimal = (number & 1) + decimal;
      number >>= 1;
  }
  return decimal;
}

console.log(decimalToBinary(50));

  // Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado (int = 5; out = 1, 2, 3, 4, 5).

  function listadenumero1(numero){
    let listanumero=[]
    for(let i = 1; numero >= i; i++){
        console.log(i);
      
    }
}
listadenumero1(5)

// Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 (int = 5; out = 5, 4, 3, 2, 1).

function listadenumero(numero){
  let listanumero=[]
  for(let i = numero - 0; i> 0; i--){
      console.log(i);
  }
}
listadenumero(5);
  
  //Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado separando pares e impares.
  //(int = 5; outOdd = 1, 3, 5; outEven = 2, 4)

  function espar(numero) {
    let pares = []
    let impares = []
    for (let i=1 ; i <= numero ; i++ ){
        if ((i%2)==0 ) {
            pares.push(i)
        } else {
            impares.push(i)
        }
    }
    console.log(`impares ${impares} pares = ${pares} `);
}
espar(5);

//Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 separando pares e impares.
//(int = 5; outOdd = 5, 3, 1; outEven = 4, 2)

function esimpar(numero){
  let pares = []
  let impares = []
  for (let i=numero ; i>0 ; i-- ){
      if ((i%2)!=0 ) {
          pares.push(i)
      }else {
          impares.push(i)
      }        
  }
  console.log(`impares = ${pares}; pares ${impares}`);
}   
esimpar(5)



//Algoritmo que me permita escribir un número y me retorne una lista de los números primos desde cero hasta el número indicado.

function sonprimo(number) {
  let primos = [];
  for (i = 2; i <= number; i++) {
    let divisores = 0;
    for (x = 1; x <= i; x++) {
      if (i % x == 0) {
        divisores += 1;
      }
    }
    if (divisores == 2) {
      primos.push(i);
    }
  }
  return primos;
}
console.log(sonprimo(10));

//Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci.
//(int = 5; out = 0, 1, 1, 2, 3)

function fibonacci(numero) {
  let fib = [0,1];
  for (let i = 2; i < numero; i++) {
    let numeros = fib[i - 1] + fib[i - 2];
    fib.push(numeros);
  }
  return fib
}
console.log(fibonacci(5));



