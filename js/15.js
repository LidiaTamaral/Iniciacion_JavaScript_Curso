//Array Methods

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Teclado Gaming', precio: 200},
    {nombre: 'Pantalla 24 4k', precio: 400},
    {nombre: 'Ratón Bluethoo', precio: 300},
    {nombre: 'Tablet', precio: 100},
    {nombre: 'Ordenador', precio: 250},
    {nombre: 'Auriculares', precio: 320},
    {nombre: 'Movil', precio: 180},
    {nombre: 'Ordenador', precio: 420}
];

//forEach
meses.forEach(function(mes) {
    if(mes == 'Febrero') {
        console.log('Febrero si existe');
    }
});

//Includes te devuelve true o false si está o no el valor en la array
let resultado = meses.includes('Marzo');


//Some es el mejor para arrays con eobjetos y te devuelve true o false si esta o no el valor
resultado = carrito.some(function(producto){
    return producto.nombre == 'Tablet'
});

//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //Valor desde donde inicia el total



//Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre === 'Ordenador'
});

console.log(resultado);