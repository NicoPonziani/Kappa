/* Esercizio 1: Somma di tutti i numeri in un array
Scrivi la funzione sumArray(numbers) che prende un rest parameters di numeri e restituisce la somma di tutti gli elementi.
Esempio:
sumArray([1, 2, 3, 4]) => 10
*/
// DOVE SCRIVERE L'ESERCIZIO

/* Esercizio 2: Filtrare numeri pari
Scrivi la funzione filterEven(numbers) che prende un array di numeri e restituisce un nuovo array contenente solo i numeri pari.
Esempio:
filterEven([1,2,3,4,5,6]) => [2,4,6]
*/
// DOVE SCRIVERE L'ESERCIZIO
function filterEven(numbers) {
// TODO: usa array.filter
}

/* Esercizio 3: Moltiplica ogni elemento per un fattore
Scrivi la funzione multiplyArray(numbers, factor) che prende un array di numeri e un numero factor, e restituisce un nuovo array in cui ogni elemento è moltiplicato per factor.
Esempio:
multiplyArray([1,2,3], 3) => [3,6,9]
*/
// DOVE SCRIVERE L'ESERCIZIO
function multiplyArray(numbers, factor) {
// TODO: usa array.map
}

/* Esercizio 4: Trova il massimo in un array
Scrivi la funzione findMax(numbers) che restituisce il valore massimo in un array di numeri. Se l’array è vuoto, restituisci null o undefined a scelta (commenta cosa hai scelto).
Esempio:
findMax([5, 3, 9, 1]) => 9
*/
// DOVE SCRIVERE L'ESERCIZIO
function findMax(numbers) {
// TODO: usa ciclo 
}

/* Esercizio 5: Applica callback su array
Scrivi la funzione applyToArray(array, callback) che prende un array di valori e una funzione callback, e restituisce un nuovo array ottenuto chiamando callback(elem, index) su ciascun elemento.
(Simile a map, ma esercizio didattico di callback).
Esempio:
applyToArray([10, 20, 30], (val, idx) => val + idx) => [10, 21, 32]
*/
// DOVE SCRIVERE L'ESERCIZIO
function applyToArray(array, callback) {
// TODO: crea un nuovo array, itera con for…of o for con index, chiama callback e push del risultato
}

/* Esercizio 6: Conta quanti elementi soddisfano una condizione
Scrivi la funzione countIf(array, predicate) che prende un array e una funzione predicate(elem) che restituisce true/false, e restituisce il conteggio di elementi per cui predicate(elem) è true.
Esempio:
countIf([1,2,3,4,5], n => n > 2) => 3
*/
// DOVE SCRIVERE L'ESERCIZIO
function countIf(array, predicate) {
// TODO: itera e incrementa contatore quando predicate(elem) è true
//HINT: puoi usare filter
}

/* Esercizio 7: Rimuovi duplicati semplici
Scrivi la funzione unique(array) che prende un array di valori primitivi (numeri o stringhe) e restituisce un nuovo array con gli elementi unici (prima occorrenza mantenuta, rimuove i duplicati successivi).
Esempio:
unique([1,2,2,3,1,4]) => [1,2,3,4]
*/
// DOVE SCRIVERE L'ESERCIZIO
function unique(array) {
// TODO: puoi usare un array d’appoggio (dove salvare i numeri)
}

/* Esercizio 8: Funzione che restituisce funzione di saluto
Scrivi la funzione makeGreeting(greeting) che prende una stringa di saluto, es. "Ciao", e restituisce una nuova funzione che, data una stringa name, restituisce la frase completa: "<greeting>, <name>!".
Esempio:
const sayHello = makeGreeting("Ciao");
sayHello("Mario") => "Ciao, Mario!"
*/
// DOVE SCRIVERE L'ESERCIZIO
function makeGreeting(greeting) {
// TODO: restituisci una funzione che prende name in input e concatena greeting con name
}

/* Esercizio 9: Contatore con closure
Scrivi la funzione createCounter() che restituisce un oggetto con due metodi:
- increment(): aumenta il contatore interno di 1 e restituisce il valore aggiornato.
- reset(): resetta il contatore a 0.
Il contatore interno non deve essere accessibile direttamente dall’esterno (usa closure).
Esempio:
const counter = createCounter();
counter.increment() => 1
counter.increment() => 2
counter.reset()
counter.increment() => 1
*/
// DOVE SCRIVERE L'ESERCIZIO
function createCounter() {
// TODO: usa variabile interna alla funzione; restituisci { increment: ..., reset: ... }
}

/* Esercizio 10: Metodo in oggetto e perdita di contesto
Crea un oggetto user con proprietà name e metodo sayName() che stampa in console this.name.
Poi:
1) Chiama user.sayName() e verifica che funzioni.
2) Assegna il metodo a una variabile esterna: const f = user.sayName; e chiama f(): spiega in commento perché ora this.name è undefined o non corretto.
3) Risolvi il problema legando il contesto: crea const fBound = user.sayName.bind(user); e verifica che funzioni correttamente.
Questo esercizio è puramente sincrono e usa solo this, senza timer.
*/
// DOVE SCRIVERE L'ESERCIZIO
const user = {
name: "Alice",
sayName() {
// TODO: console.log(this.name);
}
};
// Dopo aver definito, in VSCode prova:
// user.sayName();
// const f = user.sayName; f(); // spiega perché qui this non è user
// const fBound = user.sayName.bind(user); fBound(); // funziona