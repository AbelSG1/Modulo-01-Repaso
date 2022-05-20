const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");
// LinkedList es como las mamushkas de la lista
// agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  // Tu código acá
  let count = 0;
  if (this.head !== null) {
    count++
    current = this.head;

    while (current.next != null) {
      count++
      current = current.next;
    }
  } else {
    return 0;
  }
  return count;
};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [3]   [6] --> [5] --> [3]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  
  /*   let miList = this.head; //me guardo mi lista
    if (!miList.next) return miList;
    let curt1 = this.head;
    let curt2 = curt1.next;
    while (curt1.next) {
        if (curt1.value < curt2.value) {
            let aux = curt1.value; // me guardo el 5
            curt1.value = curt2.value;
            curt2.value = aux;
            return this.orderList();
        } else {
            curt1 = curt2;
            curt2 = curt2.next;
        }
    } */
     
    let lista = this.head
    let current = this.head;
    if (!lista)return lista;
    while(current.next){
      if(current.value < current.next.value){
        let aux = current.value;
        current.value = current.next.value;
        current.next.value = aux;
        return this.orderList();
      } else {
        current = current.next;        
      }
    } 
};

/* LinkedList.prototype.orderList = function () {
  let array = [];
  let current = this.head;

  while (current){
    array.push(current.value);
    current = current.next;
  }
array.sort(function(i, j) {
   return j - i;});// ordenamos de mayor a menor

 let current2 = this.head
  while (current2) { 
       current2.value = array.shift()
       current2 =current2.next;
   }
} */

// agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
// tomar el head como posicion 1
                                       //100   4    
LinkedList.prototype.insert = function (data, pos) {
  let count = 1;
               100
  // 1  2   3   4   5
   
  if(pos === 1){
      let current = this.head;
      let newNode2 = new Node(data);
      this.head = newNode2;
      newNode2.next = current;

  }else{
      let current = this.head;

      while (count < pos) {
        count++
        current = current.next;
      };

      aux = current.next;
      let newNode = new Node(data);
      newNode.next = aux; 
      current.next = newNode;
  };

};

/* const miListitaEnlazada = new LinkedList();
miListitaEnlazada.add(33);
miListitaEnlazada.add(44);
miListitaEnlazada.add(22);
miListitaEnlazada.add(66);
console.log(miListitaEnlazada);
console.log(JSON.stringify(miListitaEnlazada));
miListitaEnlazada.insert(777, 1);
console.log(miListitaEnlazada);
console.log(stringify(miListitaEnlazada)); */

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Vemos lo ya implementado en el archivo estructuras.js
// function LinkedList() {
//   this.head = null
// }

// function Node(value){
// this.value = value;
// this.next = null
// }

/* ////////////////////////----- ----- --------/////////////////// */

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  
};



module.exports = {
  LinkedList,
};
