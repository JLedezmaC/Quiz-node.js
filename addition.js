exports.ObjectToArray = function(object){
    let array = [];
    for(let i = 0; i <object.length; i++){
        array.push(object[i]);
    }
    maxNumber(array);
    minNumber(array);
    total(array);
    orderList(array)
}

function orderList(array){
    console.log(array.sort((a, b) => a - b));  
    /*
        a siendo el primero numero del array y b siendo el segundo 
        Si el resultado es negativo, a se ordena antes que b.
        Si el resultado es positivo, b se ordena antes de a.
        Si el resultado es 0, nada cambia. 
    */
}

function total(array){
    let total = 0;
    array.forEach(element => {
        total += Number(element);
    });
    console.log(total)

    /*Suma cada uno de los numeros y hace un total al final  */
}

function minNumber(array){
    console.log(Math.min(...array));
    /*Extrae el minimo numero de un array se usan los 3 puntos ya que sin eso da un NAN */
    /*Los 3 puntos es un spread operator, que significa eso ? Que en este caso va a separar los numeros de un array en argumentos para ir sumano uno en uno */
}

function maxNumber(array){
    console.log(Math.max(...array));
    /*Extrae el numero maximo  de un array se usan los 3 puntos ya que sin eso da un NAN */
    /*Los 3 puntos es un spread operator, que significa eso ? Que en este caso va a separar los numeros de un array en argumentos para ir sumano uno en uno */
}