/**
 * Esercizio 1
 * Dichiara ed inizializza una variabile per ogni tipologia di dato che abbiamo in javascript
 * (string, number, boolean, array, object, null, undefined)
 */
let string = "parola";
let number = 2;
let boolean = true;
let array = [1, 2, 3, k]; // ERRORE!! k è una variabile non definita in questo modo, le stringhe si fanno con gli apici
let object = { numero: 1, gatto: Jerry, pianta: cactus }; //ERRORE!! Stesso errore di prima con Jerry e cactus, in questo modo sono variabili non definite
let zero = null;
let indefinito = undefined;

/**
 * Esercizio 2
 * Dichiara una variabile (SOLO DICHIARAZIONE);
 * Assegnagli un valore di tipo string e stampala in console.
 * Poi assegna a quella stessa variabile un valore di tipo number e stampala in console.
 */

let ragazza;
ragazza = k; //ERRORE!! k è una variabile non definita, le stringhe si fanno con gli apici
console.log(ragazza);
ragazza = 23;
console.log(ragazza);

/**
 * Esercizio 3
 * Dichiara ed inizializza una costante;
 */

const k = 23;
