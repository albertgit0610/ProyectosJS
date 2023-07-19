//Convertir Fahrenheit a Celsius.
function convertegradosC(cercius) {
  const fahren = (cercius * 9) / 5 + 32;
  let message = `fahrenheit a Cercius = ${fahren}`;
  console.log(message);
  return message;
}
console.log(convertegradosC(32));

//Convertir Celsius a Fahrenheit.
function convertegradosF(fahren) {
  const cercius = ((fahren - 32) * 5) / 9;
  let message = `farenheit a grados cercius = ${cercius}`;
  console.log(Math.round(cercius * 100) / 100);
  return message;
}
console.log(convertegradosF(12));

//Convertir Celsius a Kelvin.
function convertegradosCk(kelvins) {
  const cercius = kelvins + 273.15;
  let message = `cercius a kelvins = ${cercio} `;
  console.log(message);
  return message;
}
console.log(convertegradosCk(32));

//Convertir Fahrenheit a Kelvin.
function convertegradosFk(kelvins) {
  const fahren = kelvins - (32 * 5) / 9 + 273.15;
  let message = `fahrenheit a kelvins = ${fahren}`;
  console.log(Math.round(fahren * 100) / 100);
  return message;
}
console.log(convertegradosFk(0));

//Convertir Kelvin to Celsius
function convertegradoskC(cercius) {
  const kelvins = cercius - 273.15;
  let message = `cercius a kelvins = ${kelvins} `;
  console.log(message);
  return message;
}
console.log(convertegradoskC(1));

//Convertir Kelvin a Fahrenheit.
function convertegradoskF(fahren) {
  const kelvins = fahren - (273.15 * 9) / 5 + 32;
  let message = `fahrenheit a kervins = ${kelvins}`;
  console.log(Math.round(kelvins * 100) / 100);
  return message;
}
console.log(convertegradoskF(0));

//Calcular el promedio de un arreglo de números

const averagecalculator = (grades) => {
  const quantity = grades.length;
  let totalgrade = 0;
  grades.forEach((n) => {
    totalgrade += n;
  });
  return Math.round((totalgrade / quantity) * 100) / 100;
};

console.log(averagecalculator([94, 95, 100, 99, 90]));
