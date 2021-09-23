/* Ejercicio 1
Teniendo en cuenta el siguiente array, el objetivo es que puedas mostrar por
 consola la suma total de las cantidades indicadas.
 const price = [100,101,35,20,43,76];
console.log(‘El total es $ ’)
*/

const price = [100, 101, 35, 20, 43, 76];
const total = price.reduce((pervious, current) => pervious + current)
console.log('Ejercicio 1:');
console.log(`El total es ${total}`);
console.log('*********************');
console.log();

/*Ejercicio 2 
Teniendo en cuenta el siguiente array, debes mostrar por consola el nombre de cada persona. 
Para ello tendremos que recorrer persona por persona y obtener sólo el nombre.
const list = [
{name:'Martin',edad:'23'}, 
{name:'Lucas',edad:'18'}, 
{name:'Egdar',edad:'33'}, 
{name:'Lucía',edad:'28'}, 
{name:'Florencia',edad:'25'}, 
{name:'Eugenia',edad:'26'}
]
*/

const list = [
    { name: 'Martin', edad: 23 },
    { name: 'Lucas', edad: 18 },
    { name: 'Egdar', edad: 33 },
    { name: 'Lucía', edad: 28 },
    { name: 'Florencia', edad: 25 },
    { name: 'Eugenia', edad: 26 }
];
console.log('Ejercicio 2:');
const listName = list.map((element) => console.log(element.name));
console.log('*********************');
console.log();

/*Ejercicio 3
Usando el mismo array del ejercicio anterior:
Crear uno nuevo solo con las personas que sean 
mayores de 25.
Devolver el nuevo array por consola.*/

console.log('Ejercicio 3:');
const old = list.filter((element) => element.edad > 25);
console.log(old);
console.log('*********************');
console.log();

/*Ejercicio 4
Utilizando el mismo array del ejercicio 2, 
devolver la primer persona del array que 
tenga 23 años.
*/
console.log('Ejercicio 4:');
const findPerson = list.find((element) => element.edad === 23);
console.log(findPerson);
console.log('*********************');
console.log();
