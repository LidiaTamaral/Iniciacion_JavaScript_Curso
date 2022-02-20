//String o cadenas de texto 


const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web';
const producto2 = 'Monitor HD 20"';
const email = 'correo@correo.com';

console.log(tweet.length); //Conocer los caracteres que tiene la variable producto
console.log(producto2);


//IndexOf
console.log(tweet.indexOf('JavaScript')); //Conocer donde se encuentra la palabra que estamos buscando
console.log(producto2.indexOf('tablet')); //Si sale -1 no esta en la cadena de texto
console.log(email.indexOf('@'));

//Includes (Devuelve true o false si encuentra la palabrar en la cadena de texto)

console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('tablet'));