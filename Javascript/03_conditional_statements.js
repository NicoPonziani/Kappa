/**
 * Puoi trovare il punto della dispensa che ti serve utilizzando crtl + f e cercando il titolo.
 * I titoli sono:
 * - IF, ELSE, ELSE IF
 * - SWITCH
 * - TERNARY OPERATOR
 *
 * CONDITIONAL STATEMENTS
 * Gli stati condizionali sono utilizzati per eseguire determinate azioni solo se una specifica condizione è vera.
 *
 * RICORDA che quando parliamo di CONDIZIONI, ci riferiamo ad un'espressione che può essere valutata come TRUE o FALSE ovvero una variabile BOOLEAN.
 * Quindi in breve possiamo definire come CONDIZIONE qualunque cosa che ci da come risultato TRUE o FALSE.
 * COMPRESE LE VARIABILI BOOLEAN STESSE.
 *
 * In javascript abbiamo diversi tipi di stati condizionali:
 * -IF
 * -ELSE
 * -ELSE IF
 * -SWITCH
 * -TERNARY OPERATOR
 *
 */

/**
 * IF, ELSE, ELSE IF
 * Lo stato condizionale IF viene utilizzato per eseguire un blocco di codice solo se una determinata condizione è vera.
 * Se la condizione è falsa, il blocco di codice non verrà eseguito.
 * La struttura di un blocco IF è la seguente:
 * if (condizione) {
 *    // BLOCCO DI CODICE
 * }
 *
 */
//Esempio:
let eta = 32;
if (eta > 18) {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione eta > 18 è TRUE.
  console.log("Sei maggiorenne");
}

// eta > 18 è una condizione che verrà valutata come TRUE o FALSE.
// infatti avremmo potuto assegnare il valore di eta > 18 ad una variabile booleana.
//Esempio:
let isMaggiorenne = eta > 18;
if (isMaggiorenne) {
  //è la stessa identica cosa
  console.log("Sei maggiorenne");
}

/**
 * Se vogliamo eseguire un blocco di codice nel caso in cui la condizione non sia vera, possiamo utilizzare lo stato ELSE.
 * La struttura di un blocco ELSE è la seguente:
 * if (condizione) {
 *   // BLOCCO DI CODICE
 * } else {
 *  // BLOCCO DI CODICE
 * }
 *
 * Quindi ELSE si inserisce dopo le parentesi graffe del blocco IF e non ha bisogno di una condizione perchè verrà eseguito solo se la condizione dell'IF è FALSE.
 *
 */
//Esempio:
if (eta < 18) {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione eta < 18 è TRUE.
  // In questo caso non verrà eseguito perchè eta è maggiore di 18.
  console.log("Sei minorenne");
} else {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione eta < 18 è FALSE.
  // Quindi verrà eseguito perchè eta è maggiore di 18.
  console.log("Sei maggiorenne");
}
