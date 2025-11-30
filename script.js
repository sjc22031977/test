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

// nombre = prompt("Ingrese su nombre:");
// edad = prompt("Ingrese su edad:");
// if (isNaN(edad)) {
//   alert("El valor ingresado no es un número válido.");
//   edad = prompt("Ingrese su edad:");
// }

// if (edad >= 18) {
//   validacion = "Eres mayor de edad.";
// } else {
//   validacion = "Eres menor de edad.";
// } 

// alert("Hola " + nombre + ", tienes " + edad + " años. " + validacion);


// let edad = prompt("Ingrese su edad:");
// let miembroVIP = prompt("Es miembro VIP? (true/true):").toLowerCase() === "true";

// if (isNaN(edad)) {
//   alert("El valor ingresado no es un número válido.");
//   edad = prompt("Ingrese su edad:");
// } 

// if (parseInt(edad) >= 18 && miembroVIP) { 
// console.log("Acceso concedido al área VIP."); 
// } else { 
// console.log("Acceso denegado."); 
// }

// let productos = [ 
// { nombre: 'Laptop', descuento: true, precio: 1000 }, 
// { nombre: 'Celular', descuento: false, precio: 500 }, 
// { nombre: 'Tablet', descuento: true, precio: 300 } 
// ]; 
// let countdesc = 0;
// let countnodesc = 0;
// let total = 0;
// for (let i = 0; i < productos.length; i++) { 
//   if (productos[i].descuento) { 
//     countdesc++;
//     console.log(productos[i].nombre + " tiene descuento.");
//   }else {
//     total+=productos[i].precio;
//     console.log(total +  " es el total sin descuento hasta ahora.");
//     countnodesc++;
//   }
// }
// console.log(countdesc + " productos con descuento. / " + countnodesc + " productos sin descuento.");

// function calcularEdad(nombre, edad){
//   if (isNaN(edad)) {
//     alert("El valor ingresado no es un número válido.");
//     edad = prompt("Ingrese su edad:");
//   }

//   if (edad >= 18) {
//     validacion = "Eres mayor de edad.";
//   } else {
//     validacion = "Eres menor de edad y te faltan " + (18 - edad) + " años para la mayoria de edad.";
//   } 

//   console.log("Hola " + nombre + ", tienes " + edad + " años. " + validacion);
// }

// nombre = prompt("Ingrese su nombre:");
// edad = prompt("Ingrese su edad:");
// calcularEdad(nombre, edad);

// function calcularprecioIVA (precio, iva = 21){
//   if (isNaN(precio) || isNaN(iva)) {
//     alert("El valor ingresado no es un número válido.");
//     precio = prompt("Ingrese el precio:");
//     iva = prompt("Ingrese el IVA (por defecto 21):");
//   }
//   let precioFinal = precio + (precio * iva / 100);
//   return precioFinal;
// }

// let precio = prompt("Ingrese el precio del producto:");
// let iva = prompt("Ingrese el IVA (por defecto 21):");
// let precioConIVA = calcularprecioIVA(parseFloat(precio), iva ? parseFloat(iva) : undefined);
// console.log("El precio final con IVA es: " + precioConIVA);

// let boton = document.getElementById("miBoton"); 
// boton.addEventListener("click", function() { 
//   document.getElementById("parrafo").innerText = "El texto ha sido modificado con JavaScript";
// }); 

// let boton = document.getElementById("miBoton"); 
// boton.addEventListener("click", function() { 
//   let nuevoElemento = document.createElement("li"); 
//   nuevoElemento.textContent = "Elemento 4"; 
//   document.getElementById("lista").appendChild(nuevoElemento); 
// }); 

// document.getElementById("boton-agregar").addEventListener("click", 
// function () { 
//   let producto = { id: 1, nombre: "Producto 1", precio: 10 }; 
//   let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
//   carrito.push(producto); 
//   localStorage.setItem("carrito", JSON.stringify(carrito)); 
//   actualizarCarrito(); 
// }); 

// function actualizarCarrito() { 
//   var carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
//   var listaCarrito = document.getElementById('lista-carrito'); 
//   listaCarrito.innerHTML = ''; 
//   for (var i = 0; i < carrito.length; i++) { 
//     var producto = carrito[i]; 
//     var li = document.createElement('li'); 
//     li.textContent = producto.nombre + ' - $' + producto.precio; 
//     listaCarrito.appendChild(li);
//   }
// };

// document.getElementById("boton-quitar").addEventListener("click", 
// function () { 
//   localStorage.removeItem('carrito'); 
//   actualizarCarrito(); 
// }); 

// Función para aplicar las preferencias guardadas
    function aplicarPreferencias() {
      const nombre = localStorage.getItem("nombreUsuario");
      const color = localStorage.getItem("colorFondo");
      console.log("Cargando preferencias:", nombre, color);

      if (nombre && color) {
        document.getElementById("saludo").textContent = `Bienvenido, ${nombre}!`;
        document.body.style.backgroundColor = color;
        document.getElementById("nombre").value = nombre;
        document.getElementById("color").value = color;
      }
    }

    // Guardar preferencias al enviar el formulario
    document.getElementById("preferenciasForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Evita recargar la página
      const nombre = document.getElementById("nombre").value;
      const color = document.getElementById("color").value;

      localStorage.setItem("nombreUsuario", nombre);
      localStorage.setItem("colorFondo", color);

      aplicarPreferencias();
    });

    // Aplicar preferencias automáticamente al cargar la página
    window.addEventListener("DOMContentLoaded", aplicarPreferencias);
