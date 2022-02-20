"use strict"; //Correr JS en modo estricto

// Objetos
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}
Object.freeze(producto); //Sirve para que no se puedan añadir mas propiedades al objeto ni modificarlos

//producto.imagen = 'imagen.jpg'; //Agregamos una nueva propiedad al objeto pero da error por tener freeze

console.log(Object.isFrozen(producto)); //para conocer si el objeto permite añadir propiedades. Si devuelve true no se pueden añadir mas.

console.log(producto);

//seal
Object.seal(producto); //Sirve para que no se puedan añadir mas propiedades al objeto pero si modificarlos

//producto.imagen = 'imagen.jpg'; //Agregamos una nueva propiedad al objeto pero da error por tener freeze

console.log(Object.eseal(producto)); 

console.log(producto);