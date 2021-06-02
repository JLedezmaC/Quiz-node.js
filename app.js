console.log("process.argv",process.argv)
let object = process.argv.slice(2);

const callFunction = require('./addition'); 

/*Aqui llamo al export de la ruta que en este caso es una funcion*/

callFunction.ObjectToArray(object);  

/* Aqui llamo a callfunction el cual tiene la funcion exportada que esta en la ruta indicada anteriormente */
/*Y le paso un argumento  */

/*
    El código funciona de esta manera;

    1- Se pasan el objeto a un array 
    2-Se pasa el array a las funciones 
    3-Cada función hace algo en especifico 
    4-Se imprimen los resultados 

*/