/*
let n1 = 0;
let n2 = 0;
let resultado = 0; 
n1 = prompt("Ingrese el primer número:");
if (isNaN(n1)) {
  alert("El valor ingresado no es un número válido.");
  n1 = prompt("Ingrese el primer número:");
}
n2 = prompt("Ingrese el segundo número:");
if (isNaN(n2)) {
  alert("El valor ingresado no es un número válido.");
  n2 = prompt("Ingrese el primer número:");
}
resultado = parseFloat(n1) + parseFloat(n2);
resultado -= parseFloat(n1);
resultado *= parseFloat(n2);
resultado /= parseFloat(n1);
if (resultado >+ 10) {
  respuesta = "El resultado es mayor o igual que 10.";
} else{
  respuesta = "El resultado es menor que 10.";
}
alert("El resultado de la suma es: " + resultado + " (" + respuesta + ")");
*/

nombre = prompt("Ingrese su nombre:");
edad = prompt("Ingrese su edad:");
if (isNaN(edad)) {
  alert("El valor ingresado no es un número válido.");
  edad = prompt("Ingrese su edad:");
}

if (edad >= 18) {
  validacion = "Eres mayor de edad.";
} else {
  validacion = "Eres menor de edad.";
} 

alert("Hola " + nombre + ", tienes " + edad + " años. " + validacion);