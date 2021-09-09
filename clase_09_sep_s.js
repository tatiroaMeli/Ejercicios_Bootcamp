/* Ejercicio 1
Crear una función constructora la cual vamos a llamar Computadora, deberá tener las siguientes propiedades:

ram:string
cpu:string
disco:string
monitor:string
gpu:boolean
*/

/*
Ejercicio 3 
Crear 5 computadoras distintas y guardarlas (Array) de manera que 
luego podamos consultar cuántas computadoras tenemos y poder mostrarlas 
por consola. Además queremos ver el detalle de cada computadora por consola.
*/

/*Ejercicio 3
Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
*/

function Computadora(ram, cpu, disco, monitor, gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

const listaComputadoras = [];

listaComputadoras.push(
    new Computadora("8gb", "intel", "2gb", "14pul", true),
    new Computadora("12gb", "intel", "2gb", "14pul", false),
    new Computadora("6gb", "intel", "2gb", "14pul", true),
    new Computadora("32gb", "intel", "2gb", "14pul", false),
    new Computadora("64gb", "intel", "2gb", "14pul", true)
)

const arrGpu = listaComputadoras.filter((element) => element.gpu === true);

console.log(listaComputadoras);
console.log(arrGpu);

/*Ejercicio 4
Crear una función que calcule cuántos litros de nafta 
gasta un auto que consume 2 litros cada 100km, ingresando
 por parámetro la cantidad de kilómetros del recorrido a realizar. 
 Luego crear una función que, a partir de ese dato, 
 devuelva cuánto significa eso en pesos ingresando por parámetro
  el precio del litro de nafta.*/