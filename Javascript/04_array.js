/**
 * ARRAY
    Cos’è un array?
    Un array è un tipo di dato in JavaScript (sì, proprio come string o number) che ci permette di conservare più valori all’interno della stessa variabile.

    In altre parole, un array è una collezione di dati.

    Se ti ricordi, una variabile è come un contenitore in cui possiamo conservare un valore per riutilizzarlo quando serve. 
    Bene, immagina ora che questo contenitore sia suddiviso in tante piccole scatole, ognuna delle quali può contenere un valore.

    Ecco, questo è un array! Un unico contenitore, ma con tanti scomparti interni in cui possiamo organizzare i nostri dati. 📦📦📦

    Ora sorge una domanda: come posso usare i singoli valori contenuti nell'array? 🤔

    Quando abbiamo parlato delle variabili, abbiamo spiegato che possiamo accedere al valore conservato al loro interno semplicemente richiamando il nome della variabile. 
    Nel caso degli array, però, il nome della variabile si riferisce all'intera "scatola" che contiene tutti i valori insieme.

    Quindi, come possiamo accedere a un valore specifico?
    È qui che interviene JavaScript: organizza per noi le "scatoline" interne etichettandole con un numero, chiamato indice.

    Questi indici sono assegnati in ordine incrementale, partendo da 0 per il primo elemento, 
    e l'ordine rispecchia esattamente quello in cui gli elementi sono stati inseriti nell'array. 😀

    Vediamo come tutti questi concetti si possono mettere in pratica.
 */

// Creiamo un array che contiene vari tipi di dati:
// una stringa, un numero, un'altra stringa, un booleano e un oggetto!
let array = ["Nick", 1993, "Array", true, { nome: "Nick", eta: 32 }];

/*
  Questo è un array!

  1. **Dichiarazione**:
     - L'abbiamo dichiarato proprio come una qualunque variabile (con 'let', 'const').

  2. **Inizializzazione**:
     - Qui entra in gioco la sintassi degli array: i valori devono essere inseriti tra parentesi quadre [].
     - Immagina le parentesi quadre come una grande scatola che contiene tante piccole scatole, ognuna con un valore.

  3. **Separazione dei valori**:
     - I valori (le "scatoline interne") sono separati da una virgola, proprio come se stessimo elencando degli ingredienti in una ricetta.

  4. **Linguaggio non tipizzato**:
     - In JavaScript, non dobbiamo preoccuparci di uniformare il tipo dei dati. Possiamo mescolare stringhe, numeri, booleani e oggetti senza problemi.

*/

// Con il nome della variabile "array" accediamo all'intera scatola grande
console.log(array); // <-- Stampa TUTTI i valori contenuti nell'array

/*
  Siccome l'array è una variabile, lo usiamo con il suo nome.
  Tuttavia, quel nome rappresenta l'intera scatola, ossia tutti i valori insieme.
*/

/*
  Come possiamo invece accedere ai singoli valori, ovvero alle "scatoline" interne?
  Facciamo un po' di chiarezza!
*/

// Accediamo al PRIMO valore (indice 0)
console.log(array[0]); // <-- Stampa "Nick"

// Accediamo all'ULTIMO valore (in questo caso indice 4)
console.log(array[4]); // <-- Stampa l'oggetto { nome: "Nick", eta: 32 }

/*
  Ricorda: JavaScript etichetta le scatoline interne con degli indici, 
  partendo da 0 per il primo elemento, 1 per il secondo, e così via.
  
  La sintassi è semplice:
  - Usiamo il nome della variabile, seguito da parentesi quadre.
  - All'interno delle parentesi, inseriamo il numero corrispondente all'indice 
    della scatolina che vogliamo utilizzare.
*/

/*
  Possiamo usare i valori contenuti nell'array proprio come se fossero normali variabili? 
  Certo che sì! 🎉

  Possiamo:
  - Modificarli
  - Assegnarli ad altre variabili
  - E svolgere tutte le operazioni che vogliamo!
*/

// Modifichiamo il valore della prima "scatolina"
array[0] = "Nick-Modificato";
console.log(array[0]); // <-- Stampa: "Nick-Modificato"

// Copiamo il valore della seconda "scatolina" in una nuova variabile
let copiaValoreDue = array[1];
console.log(copiaValoreDue); // <-- Stampa: 1993

// Modifichiamo il valore della copia
copiaValoreDue = 1990;
console.log(array[1]); // <-- Rimane 1993 (l'array non viene modificato)
console.log(copiaValoreDue); // <-- Stampa: 1990

/*
  Osservazione:
  Le singole "scatoline" (ovvero gli elementi dell'array) si comportano come vere variabili.
  Se assegnamo il valore di una "scatolina" ad una nuova variabile e successivamente modifichiamo quest'ultima,
  l'originale nell'array rimane invariato.
*/

/*
  Quindi, con gli array possiamo fare solo questo? 
  La risposta è: NO!

  Ricorda: un array è un oggetto in JavaScript, perciò ha a disposizione diversi metodi
  che ci permettono di eseguire varie operazioni. Vediamo quelli principali.
*/

/* 
  PUSH:
  Il metodo .push(item) aggiunge un elemento in coda all'array, cioè in ultima posizione.
*/
array.push("Nuovo Elemento");
console.log(array); // <-- L'ultimo elemento è ora "Nuovo Elemento".

/* 
  POP:
  Il metodo .pop() rimuove l'ultimo elemento dall'array.
*/
array.pop();
console.log(array); // <-- L'array torna alla sua forma iniziale, poiché l'ultimo elemento è stato rimosso.

/* 
  LENGTH:
  La proprietà .length restituisce il numero di elementi presenti nell'array.
*/
console.log(array.length); // <-- Stampa la lunghezza dell'array.

/* 
  SHIFT:
  Il metodo .shift() rimuove il primo elemento dell'array e sposta tutti gli altri a sinistra.
*/
array.shift();
console.log(array); // <-- Il primo elemento è stato rimosso.

/* 
  UNSHIFT:
  Il metodo .unshift(item) aggiunge uno o più elementi all'inizio dell'array.
*/
array.unshift("Primo Elemento");
console.log(array); // <-- "Primo Elemento" è stato aggiunto in testa all'array.

/* 
  INDEXOF:
  Il metodo .indexOf(item) restituisce l'indice del primo elemento che corrisponde al valore specificato.
  Se l'elemento non viene trovato, restituisce -1.
*/
let indice = array.indexOf("Array");
console.log("L'indice dell'elemento 'Array' è:", indice);

/*
  Questi sono alcuni dei metodi e proprietà base per lavorare con gli array in JavaScript.
  Esplorandoli potrai manipolare i dati in maniera efficace e sfruttare al massimo la flessibilità degli array!
*/
