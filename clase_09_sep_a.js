/*Ejercicio 1

Crear un objeto CuentaBancaria mediante una función constructora 
que contenga los siguientes datos:
Nombre del titular.
Número de cuenta.
Apellido del titular.
Saldo.
Movimientos.

Ejercicio 2 
Crear métodos para:
Mostrar el nombre completo del titular.
Debitar dinero de la cuenta. Si no tiene saldo suficiente tiene 
que mostrar un mensaje por consola y no realizar la operación.
Acreditar dinero en la cuenta.
Mostrar el saldo de la cuenta.
Mostrar el historial de movimientos.

Ejercicio 3
Crear dos o tres cuentas, mostrar por consola el saldo inicial, 
realizar operaciones,  mostrarlas por consola y luego mostrar
 el saldo final.
*/

function CuentaBancaria(nombre, apellido, cuenta) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.cuenta = cuenta;
  this.saldo = 0;
  this.movimiento = [];

  this.nombreCompleto = function () {
    return `Nombre: ${this.nombre} ${this.apellido}`;
  };

  this.acreditar = function (dinero) {
    this.movimiento= [...this.movimiento, {tipo:"acredito", valor: dinero}];
    this.saldo += dinero;
    console.log(this.saldo);
    console.log(this.movimiento);
  };

  this.debitar = function (valorDebitado) {
    if (this.saldo < valorDebitado) {
      console.log("saldo insuficiente");
    } else {
      this.movimiento = [...this.movimiento, {tipo:"debito", valor:valorDebitado}];
      this.saldo += valorDebitado;
      console.log(this.saldo);
      console.log(this.movimiento);
    }
  };
}

const nuevaCuenta1 = new CuentaBancaria("Maria", "Perez");
console.log(nuevaCuenta1.nombreCompleto());
const acredito1 = nuevaCuenta1.acreditar(5000);
const debito1 = nuevaCuenta1.debitar(2000);
const acredito2 = nuevaCuenta1.acreditar(2000);
const debito2 = nuevaCuenta1.debitar(11000);



