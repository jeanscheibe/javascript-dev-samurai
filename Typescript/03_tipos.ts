/* temos os tipos básicos como

String
Number
Boolean
Array
Enum
Tuple
Unknown
Any
Void

*/

// declaração dos tipos
const doidera: string = "Felipe";
const number: number = 25;
const verdade: boolean = true;
const lista: Array<string> = ["Felipe", "Bruno", "Fernando"];

// tipar os valores das entradas nos ajuda a entender como a função vai agir

const sum = (value1: number, value2: number): number => {
  return value1 + value2;
};

// Enum = Enumerated
// Para criar um tipo de lista com número de entradas limitado

enum paymentMethods {
  creditCard = "credit_card", // a própria linguagem vai numerar os elementos
  debitCard = "debit_card",
  bankTransfer = "bank_transfer",
}

// Tuples - pode ser usados como forma de definir uma função que retorna mais de um valor

// Unknown e Any - Desconhecido ou qualquer. Porém o tipo any remove a checagem de tipo

// void é usado para definir os valores de saída de uma função que não retorna nada

const setUserAge = (age: number): void => {};
