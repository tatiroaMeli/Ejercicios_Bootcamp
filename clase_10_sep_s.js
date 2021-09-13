/*Ejercicio 5
Crear un array que contenga números del 1 al 10. 
Retornar un nuevo array que contenga todos los números
 multiplicados por dos
 */

const numbersArr = Array.from({ length: 100 }, (v, i) => i + 1);
const arrTwo = numbersArr.map((e) => e * 2);
console.log(arrTwo);

/*
 Ejercicio 6
Del array que devuelve el ejercicio número 5, 
filtrar los que sean mayores a 5
*/

const arrFive = arrTwo.filter((e) => e >= 5);
console.log(arrFive);

/*
Ejercicio 7
Del array que devuelve el ejercicio 6, buscar el
primero que sea mayor a 10
*/

const arrTen = arrFive.find((e) => e > 10);
console.log(arrTen);

/*
Ejercicio 8
 Dado el siguiente array filtremos a los pokemones con 
 poder menor a 10.
let pokemones = [ 
{ nombre: 'pikachu', poder: 12 },
 { nombre: 'bulbasaur', poder: 6 },
 { nombre: ‘charizard’, poder: 19 },
 { nombre: ‘squirtle’, poder: 3 },
 { nombre: 'metwo', poder: 6 }, 
]
*/

const pokemones = [
  { nombre: "pikachu", poder: 12 },
  { nombre: "bulbasaur", poder: 6 },
  { nombre: "charizard", poder: 19 },
  { nombre: "squirtle", poder: 3 },
  { nombre: "metwo", poder: 6 },
];

const arrPokemones = pokemones.filter((e) => e.poder < 10);
console.log(arrPokemones);
