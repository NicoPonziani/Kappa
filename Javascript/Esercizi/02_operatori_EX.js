/**
 * Esercizio 1
 * Dichiara ed inizializza una variabile di tipo numerico con valore 10.
 * Dichiara ed inizializza una variabile di tipo stringa con valore "Ciao Mondo!".
 */

let number = 10;
let string = "Ciao Mondo!";

/**
 * Esercizio 2
 * Usa la variabile numerica di prima ed aggiungi 1 usando l'operatore di incremento
 */

number++;

/**
 * Esercizio 3
 * Somma la variabile numerica di prima a 9 e salva il risultato in una nuova variabile.
 * Stampa entrambe le variabili.
 */
let newVar = number + 9;
console.log(number);
console.log(newVar);

/**
 * Esercizio 4
 * Dividi la variabile numerica che contiene il risultato di prima per 5 e salva il risultato nella stessa variabile.
 * Infine stampala.
 */

newVar = newVar / 5;
console.log(newVar);

/**
 * Esercizio 5
 * Concatena tramite l'operatore + la variabile stringa del primo esercizio con la stringa " Pinguino".
 * Stampa il risultato senza assegnare il valore ad una variabile.
 */

console.log(string + " pinguino");

/**
 * Esercizio 6
 * Concatena alla variabile sotto dichiarata la variabile numerica del primo esercizio
 * e stampa il risultato
 */

let stringa = "Il numero è: ";
console.log(stringa + number);

/**
 * Esercizio 7
 * Stampa in console il risultato del confronto tra le due variabili dichiarate sotto (considerando anche il tipo di dato)
 */
let nome = "Kappa";
let cognome = "Ti";
console.log(nome !== cognome);

/**
 * Esercizio 8
 * Stampa in console il risultato del confronto tra le due variabili dichiarate sotto (non considerando anche il tipo di dato)
 */
let numero = 10;
let numero2 = "10";
console.log(numero == numero2);

/**
 * Esercizio 9
 * Decrementa la prima variabile numerica qui sotto di 1 tramite l'operatore di decremento
 * Incremento la seconda variabile numerica qui sotto di 1 tramite l'operatore di incremento
 * Confronta le variabili e vedi se la prima è minore o uguale la seconda ed assegna il risultato ad un'altra variabile
 * Stampa il risultato
 *
 */
let k = 10;
let n = 10;
k--;
n++;
f = k <= n;
console.log(f);

/**
 * Esercizio 10
 * Considerando le due variabili che hai sopra stampa in console le seguenti operazioni:
 * -La somma delle due variabili
 * -La differenza tra le due variabili
 * -Il resto delle due variabili
 * -il confronto stretto (===) di uguaglianza
 * -il confronto stretto di disuguaglianza
 * -il confronto di maggiore o uguale
 * -il confronto di minore o uguale
 */

console.log(k + n, k - n, k % n, k === n, k !== n, k >= n, k <= n);
