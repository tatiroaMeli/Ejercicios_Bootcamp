/* Ejercicio 1
Crear una función constructora la cual vamos a llamar Computadora, deberá tener las siguientes propiedades:

ram:string
cpu:string
disco:string
monitor:string
gpu:boolean
*/

/*
Ejercicio 2 
Crear 5 computadoras distintas y guardarlas (Array) de manera que 
luego podamos consultar cuántas computadoras tenemos y poder mostrarlas 
por consola. Además queremos ver el detalle de cada computadora por consola.
*/

const Computadora = (ram, cpu, disco, monitor, gpu) => {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

const listaComputadoras = [];

listaComputadoras.push(
    new Computadora("8gb", "intel", "2gb", "14pul", true),
   /* new Computadora("12gb", "intel", "2gb", "14pul", false),
    new Computadora("12gb", "intel", "2gb", "14pul", false),
    new Computadora("12gb", "intel", "2gb", "14pul", false),
    new Computadora("12gb", "intel", "2gb", "14pul", false)*/
)

console.log(listaComputadoras);