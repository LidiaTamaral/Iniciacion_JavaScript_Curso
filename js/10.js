// Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto);

// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

//Agregar nuevas propiedades

producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponible;

console.log(producto);