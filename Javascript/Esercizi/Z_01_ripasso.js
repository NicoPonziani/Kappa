let variabile = "nome";
let variabile2 = "cognome";
let result;
if (variabile === variabile2) {
  result = variabile + " " + variabile2;
} else {
  result = variabile2 + " " + variabile;
}
console.log(result);

let var1 = 3;
let var2 = 2;
if (var1 < 5) {
  var1--;
  var2++;
} else if (var1 >= 2 && var1 <= 8) {
  var1 *= var2;
} else if (var1 > 10) {
  var2 = 0;
}
console.log(`variabile 1 : ${var1}, variabile 2 : ${var2}`);

const fiore1 = {
  colore: "verde",
  altezza: 50,
  tipo: "cactus",
};
const fiore2 = {
  colore: "blu",
  altezza: 40,
  tipo: "cactus",
};

if (fiore1.tipo === fiore2.tipo) {
  console.log(
    `fiore 1 : colore = ${fiore1.colore}, altezza = ${fiore1.altezza}`
  );
  console.log(
    `fiore 2 : colore = ${fiore2.colore}, altezza = ${fiore2.altezza}`
  );
} else {
  fiore2.tipo = fiore1.tipo;
  console.log(fiore2);
}

/**
 * ESERCIZIO
 * Dichiara 4 variabili , inizializzale successivamente: 2 di tipo stringa, 2 di tipo numerico
 * Scrivi un blocco condizionale in cui :
 * - se le due variabili numeriche sono uguali salva il risultato del prodotto in un'altra variabile
 * - se la prima variabile numerica è maggiore della seconda salva il risultato della sottrazione in un'altra variabile
 * - se la prima variabile numerica è minore della seconda salva il risultato della somma in un'altra variabile
 * - se nessuna delle condizioni precedenti è rispettata stampa in console "Nessuna operazione eseguita"
 *
 * dopo fai un altro blocco condizionale:
 * - se la lunghezza della prima stringa (stringa.length) è maggiore della lunghezza della seconda stampa la prima stringa e concatena il risultato del blocco condizionale precedente
 * - senno fai la stessa cosa ma utilizzando la seconda stringa
 * **TIPS** La variabile che utilizzi per salvare il risultato nel primo blocco condizionale puo essere la stessa **TIPS**
 */
let word1 = "casa";
let word2 = "cucina";
let num1 = 2;
let num2 = 10;
let num3;
if (num1 === num2) {
  num3 = num1 * num2;
} else if (num1 > num2) {
  num3 = num1 - num2;
} else if (num1 < num2) {
  num3 = num1 + num2;
} else {
  console.log("Nessuna operazione eseguita");
}

if (word1.length > word2.length) {
  console.log(word1 + " " + num3);
} else {
  console.log(word2 + " " + num3);
}
