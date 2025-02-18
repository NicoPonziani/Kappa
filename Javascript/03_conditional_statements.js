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
 * if (condizione) {       <-- 'if' è la parola chiave, (condizione) qui dobbiamo inserire la nostra condizione (spiegata ad inizio capitolo)
 *   // BLOCCO DI CODICE   <-- il blocco di codice che verrà eseguito se la condizione ha restituito come valore TRUE
 * } else {                <-- 'else' è la parola chiave
 *  // BLOCCO DI CODICE    <-- il blocco di codice che verrà eseguito se la condizione ha restituito come valore FALSE
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

/**
 * Se vogliamo eseguire un blocco di codice diverso per ogni condizione possibile, possiamo utilizzare lo stato ELSE IF.
 * La struttura di un blocco ELSE IF è la seguente:
 * if (condizione) {
 *   // BLOCCO DI CODICE
 * } else if (condizione) {
 *   // BLOCCO DI CODICE
 * } else {
 *   // BLOCCO DI CODICE
 * }
 *
 * Quindi ELSE IF si inserisce dopo le parentesi graffe del blocco IF e ha bisogno di una condizione perchè verrà eseguito solo se la condizione dell'IF è FALSE e la sua condizione è TRUE.
 *
 */
//Esempio:
if (eta < 18) {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione eta < 18 è TRUE.
  // In questo caso non verrà eseguito perchè eta è maggiore di 18.
  console.log("Sei minorenne");
} else if (eta >= 18 && eta < 65) {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione eta >= 18 && eta < 65 è TRUE.
  // Quindi verrà eseguito perchè eta è maggiore o uguale a 18 e minore di 65.
  console.log("Sei maggiorenne");
} else {
  // BLOCCO DI CODICE che verrà eseguito solo se le condizioni degli IF precedenti sono FALSE
  // Quindi non verrà eseguito perchè entriamo nel blocco di codice dell'ELSE IF precedente.
  console.log("Sei un anziano");
}

//Esempio 2:
let numero = 20;
if (numero > 10) {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione numero > 10 è TRUE.
  // Quindi verrà eseguito perchè numero è maggiore di 10.
  console.log("Il numero è maggiore di 10");
} else if (numero === 20) {
  // BLOCCO DI CODICE che verrà eseguito solo se la condizione numero === 20 è TRUE.
  // La condizione qui è rispettata, ma comunque non entreremo in questo blocco di codice perchè siamo entrati in quello precedente.
  console.log("Il numero è uguale a 20");
} else {
  console.log("Il numero è maggiore di 10 e diverso da 20");
}
/**
 * QUINDI RICORDA:
 * Noi entreremo solamente in UNO dei blocchi che compongono il nostro conditional statement.
 * Una volta che siamo entrati in uno dei blocchi gli altri non verranno eseguiti.
 */

/**
 * SWITCH
 * Lo stato condizionale SWITCH viene utilizzato per eseguire un blocco di codice diverso per ogni possibile valore di una variabile.
 * La struttura di un blocco SWITCH è la seguente:
 * switch (variabile) {       <-- switch è la parola chiave, (variabile) è la variabile che vogliamo analizzare
 *  case valore1:             <-- case è la parola chiave, 'valore1' è il valore con cui vogliamo mettere a confronto la nostra variabile
 *   // BLOCCO DI CODICE      <-- il blocco di codice che verrà eseguito se il confronto dà esito positivo
 *  break;                    <-- parola chiave che ci permette di uscire dallo SWITCH e smettere di confrontare la nostra variabile con altri valori
 *  case valore2:
 *  // BLOCCO DI CODICE
 * break;
 * default:
 * // BLOCCO DI CODICE
 * }
 *
 * QUINDI:
 * -lo SWITCH si basa su una variabile che verrà confrontata con i vari valori che abbiamo all'interno dei CASE.
 * -Se il valore della variabile è uguale al valore del CASE, allora verrà eseguito il blocco di codice del CASE.
 * -Se nessun CASE è uguale al valore della variabile, verrà eseguito il blocco di codice del DEFAULT.
 * -Al termine di ogni blocco di codice del CASE dobbiamo inserire la parola chiave BREAK per uscire dallo SWITCH senno continuerà ad eseguire i blocchi successivi.
 *
 */
//Esempio:
let giorno = "Lunedì";
switch (giorno) {
  case "Lunedì":
    //BLOCCO DI CODICE CHE VERRA ESEGUITO DAL MOMENTO CHE IL VALORE DELLA VARIABILE GIORNO E' UGUALE A "Lunedì"
    console.log("Oggi è Lunedì");
    break;
  case "Martedì":
    console.log("Oggi è Martedì");
    break;
  case "Mercoledì":
    console.log("Oggi è Mercoledì");
    break;
  case "Giovedì":
    console.log("Oggi è Giovedì");
    break;
  case "Venerdì":
    console.log("Oggi è Venerdì");
    break;
  case "Sabato":
    console.log("Oggi è Sabato");
    break;
  case "Domenica":
    console.log("Oggi è Domenica");
    break;
  default:
    console.log("Non so che giorno è oggi");
}

/**
 * TERNARY OPERATOR
 * Il TERNARY OPERATOR è una forma abbreviata di uno stato condizionale IF-ELSE.
 * La struttura di un TERNARY OPERATOR è la seguente:
 * condizione ? valore1 : valore2;
 *
 * QUINDI:
 * -La condizione è un'espressione che verrà valutata come TRUE o FALSE.
 * -Se la condizione è TRUE, verrà restituito il valore1.
 * -Se la condizione è FALSE, verrà restituito il valore2.
 *
 * L'equivalente di un TERNARY OPERATOR con uno stato condizionale IF-ELSE è il seguente:
 * if (condizione) {
 * valore1
 * } else {
 * valore2
 * }
 *
 * Il TERNARY OPERATOR è molto utile quando dobbiamo assegnare un valore ad una variabile in base ad una condizione.
 *
 */
//Esempio:
let etaNick = 32;
console.log(etaNick > 18 ? "Sei maggiorenne" : "Sei minorenne");
//In questo caso la condizione etaNick > 18 è TRUE quindi verrà restituito il valore "Sei maggiorenne".

//LA STESSA COSA FATTA CON IF-ELSE:
if (etaNick > 18) {
  console.log("Sei maggiorenne");
} else {
  console.log("Sei minorenne");
}
/**
 * Quindi ricorda, in base alla situazione, di utilizzare il ternary operator in modo da rendere il codice più leggibile e conciso.
 */

/**
 * Con i conditional statements possiamo anche eseguire operazioni in base al tipo di dato di una variabile.
 * Per farlo possiamo utilizzare l'operatore typeof.
 * L'operatore typeof restituisce il tipo di dato di una variabile.
 */
//Esempio:
let nome = "Kappa";
if (typeof nome === "string") {
  console.log("La variabile nome è di tipo string");
} else {
  console.log("La variabile nome non è di tipo string");
}
