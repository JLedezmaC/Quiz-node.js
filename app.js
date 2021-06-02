console.log("process.argv",process.argv)
let object = process.argv.slice(2);

const callFunction = require('./addition'); 

/*Aqui llamo al export de la ruta que en este caso es una funcion*/

callFunction.OrderNumbers(object);  

/* Aqui llamo a callfunction el cual tiene la funcion exportada que esta en la ruta indicada anteriormente */
/*Y le paso un argumento  */