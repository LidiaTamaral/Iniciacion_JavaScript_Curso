//Arrays

//Forma optima
const numeros = [10,20,30,40,50];





//Acceder a los valores de una Array
// console.log(numeros[4]);

// //Conocer la extension de una Array
// console.log(meses.length);

// //ver todos los valores
// numeros.forEach(function(numero) {
//     console.log(numero);
// })

//Agregar valores a la Array forma mala
numeros[5] = 60;

//Agregar valores a la Array forma buena al final de la array
numeros.push(70,80,90);

//otra forma pero los agrega al principio de la array
numeros.unshift(-20,-10,0);

console.table(numeros);

//Otra forma de crear una array
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
meses.pop(); //Borrar el ultimo elemento
meses.shift(); //Bora el primer elemento
meses.splice(2,1) //Borra un elemento a la eleccion, el primer numero indica la posicion del elemento a borrar y el segundo cuantos elementos se quieren borrar desde ahí.
console.table(meses);

//Rest Operator o Spread Operator sirve para agregar elementos a la array es la mejor forma porque asi no modificas el array original

const nuevoArray = [...meses, 'junio'];
console.log(nuevoArray);