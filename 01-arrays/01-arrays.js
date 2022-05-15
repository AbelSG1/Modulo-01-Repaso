
function invertirOrden(array) {
    // [1,2,"x"]
    // ["x",2,1]
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO 
    // debera ser devuelto
    // No vale usar el metodo "reverse"
    // [1, 4, 24, 10, 8, 6]
    // npm run test:01 para correr solo el primer test 
    let nuevoArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] < 10 && array[i] >= 0) {
            nuevoArray.unshift(array[i]);
        }
    }
    return nuevoArray;
};



function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    array1[4,3,2,1]
    array2[5,6,7,8]

    var numeroMenor = array1[0];
    let numeroIgual;
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                numeroIgual = array1[i];
                return numeroIgual;
            } else {
                if (array1[i] < array2[j] && array1[i] < numeroMenor) {
                    numeroMenor = array1[i];
                } else {
                    if (array2[j] < array1[i] && array2[j] < numeroMenor) {
                        numeroMenor = array2[j];
                    }
                }
            }
        }      
    }
    return numeroMenor;
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    // Ejemplo: [[1, 3], [10, 20], [4, 5], 2]
    let arrayNuevo = [];
    for(i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            let suma = 0;
            for(j=0;j<array[i].length;j++){
                 suma= suma + array[i][j];
                }
                arrayNuevo.push(suma);
        }else{
            arrayNuevo.push(array[i])
        }
    }
    return arrayNuevo;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Ejemplo divisor = 3 => [x,x,x] y si es divisor = 4 => [x,x,x,x]
    // vemos que todos los elementos deben tener el mismo valor
    // Siendo el número divisible entre el divisor, de no ser así, debe devolver false
    // es decir Si el resultado de la division no es un entero, deben devolver false
    let array = [];
    if (numero % divisor === 0){
        for (i=0;i<divisor;i++){
           array.push(numero/divisor);
        }
    } else return false;
    return array;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let mayorMenor = [];
    let mayor = array[0]
    let menor = array[0]
    for(i=0;i<array.length;i++){
        if(array[i]< menor ){
            menor = array[i];
        } else {
            if(array[i]> mayor){
                mayor = array[i];
            }
        }
    }
    mayorMenor.push(menor);
    mayorMenor.push(mayor);
    return mayorMenor;
};


/* ******************************************************
 
Que pasaria si los array recibidos fuesen multidimensionales?
 
****************************************************** */


module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};

