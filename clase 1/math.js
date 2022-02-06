const Math = {}; //esta forma es otra de exportar mediante un objeto, this is other way to exporte


//here we r gonna see modules of node.js

function add(x1, x2) {   //sumar = add
    return x1 + x2;
}

function substract(x1, x2) {  //restar - substract
    return x1 - x2;
}

function multiply (x1, x2) { //multiplicar- plus-
    return x1 * x2;
}

function divide (x1, x2) {   //dividir-divide
    if  (x2 == 0){   //que pasa si no se puede dividir x 0? what if i can't divide with 0
        console.log('can not divide by 0');
    } else {
        return x1 / x2;
    }                      
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;


module.exports = Math;


/* primera forma para exportar
exports.add = add; //palabra clave en node para exporta, key word for export
exports.substract= substract;
exports.multiply = multiply;
exports.divide = divide;
*/
// los modulos son archivos que nos permite dividir la app en multiples partes
// modules are files who let us to divide our app on multiple files.