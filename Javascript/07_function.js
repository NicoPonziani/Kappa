"use strict";
/**
 * FUNZIONI
 * 
 * ✨COS'è UNA FUNZIONE? 
 * Una funzione è un blocco di codice che elabora delle informazioni e può restituire un valore.
 *
 * Le funzioni ci permettono di riutilizzare porzioni di codice tutte le volte che vogliamo, 
 * evitando di riscrivere più volte lo stesso procedimento.
 *
 * In sintesi: una funzione è una porzione di codice riutilizzabile.
 * 
 */

// funzione che non restituisce nessun valore ma che stampa in console un messaggio
function saluta (){
    console.log("ciao");
}

/**
 * ✨COME SI COSTRUISCE UNA FUNZIONE?
 * 
 * ➕FUNCTION
 * Questa è la parola chiave che ci permette di dichiarare una funzione
 * 
 * ➕NOME DELLA FUNZIONE 
 * Esattamente come per le variabili lo scegliamo noi in base al compito che la funzione deve svolgere
 * Ricorda che dichiarare due funzioni con lo stesso nome potrebbe causare conflitti.
 * 
 * ➕PARAMETRI
 * Si dichiarano utilizzando le parentesi tonde.
 * Questi servono a ricevere all'interno della funzione dei valori esterni.
 * 
 * Infatti nel momento della dichiarazione noi scegliamo solamente i nomi 
 * che rappresenteranno quei valori all'interno della funzione.
 * Il valore effettivo però gli verrà passato nel momento in cui la andremo ad utilizzare.
 * 
 * Possiamo avere un numero illimitato di parametri.
 * 
 * Nel caso in cui un parametro non viene passato, quest'ultimo risulterà "undefined" all'interno dell funzione.
 * 
 * ➕CORPO DELLA FUNZIONE
 * Infine dentro alle parentesi graffe abbiamo il corpo delle funzione, ovvero dove andremo a scrivere 
 * la nostra logica.
 * 
 * All'interno del corpo della funzione possiamo restituire un valore.
 * Questa operazione si fa tramite la parola chiave "return".
 * Ricorda che utilizzare il return ci farà uscire dalla funzione in quell'esatto punto,
 * questo vuol dire che dopo non possiamo scrivere altro codice.
 */

function /*la sto dichiarando */
somma    /*nome della funzione */
(numero1,numero2) /*parametri che indicano che verranno passati 2 valori di tipo numerico*/
{       /*corpo della funzione */
    let result = numero1 + numero2; /*la nostra logica*/
    return result; /*stiamo restituendo un valore, in questo caso la somma tra 2 numeri */
}

/**
 * ✨COME UTILIZZIAMO UNA FUNZIONE? 
 * 
 * Tramite il suo nome e le parentesi tonde dei parametri!!
 * 
 * Attenzione però!! 
 * Bisogna esplicitare i parametri con dei valori 
 * Nel caso non ce ne siano dobbiamo usare le parentesi tonde vuote
 * 
 * Eseguire una funzione vuol dire eseguire tutto il codice al suo interno.
 */

saluta(); /* Stiamo utilizzano la funzione saluta, che non prevede parametri e non restituisce un valore*/

somma(3,5); /* In questo caso invece la funzione "somma" accetta 2 parametri numerici */
            /* i valori passati come parametro sostituiranno i parametri che abbiamo dichiarato esattamente nello stesso ordine in cui li passiamo  */  
            /* In questo caso infatti "numero1" prenderà il valore 3, mentre "numero2" prenderà il valore 5 */

/**
 * somma(4,5); restituisce un valore tramite la parola chiave "RETURN".
 * 
 * Quindi come per ogni valore possiamo assegnarlo ad una variabile
 */

/* abbiamo assegnato il valore che somma ci restituisce ad una variabile */
let resultSomma = somma(4,5); 

/* infatti se proviamo a vedere cosa contiene , vedremo che all'interno c'è la somma ovvero 9 */
console.log(resultSomma); 

/**
 * ✨ESEGUIRE VS REFERENZIARE
 * abbiamo detto che per eseguire una funzione dobbiamo utilizzare:
 * -il nome
 * -le parentesi tonde con i parametri
 * 
 * ma cosa succede se ometto le parentesi tonde?
 * proviamo ad assegnare quel valore ad una variabile ed a stamparla in console per vedere cosa contiene
 */

let refSomma = somma; /* assegno alla variabile la funzione somma */
console.log(somma);
/*
Questo è il risultato del console.log:

function somma(numero1,numero2) {      
    let result = numero1 + numero2; 
    return result; 
}

ESATTO!! l'intera funzione viene assegnata come valore alla variabile.
Infatti in JavaScript le funzioni sono oggetti di prima classe, 
quindi possono essere trattate come valori (assegnate a variabili, passate come parametri, ecc.).

Andiamo ora a vedere tramite l'operatore "typeof" le differenze utilizzando sempre il console log.
*/

/* REFERENZIAZIONE */
console.log(somma); //"function"

/* ESECUZIONE */
console.log(somma(1,2)); //"number"

/**RICORDA CHE REFERENZIARE NON FA SI CHE LA FUNZIONE VENGA ESEGUITA, IL CODICE AL SUO INTERNO NON VIENE LETTO */

/**
 * Ma quindi se referenziamo una funzione all'interno di una variabile possiamo vuol dire che adesso possiamo 
 * utilizzare la variabile al posto della funzione?
 * 
 * Assolutamente SI!!!!
 * 
 * proviamo ad eseguire la funzione tramite la variabile a cui la avevamo assegnata
 */

refSomma(3,5); // restituisce il valore 8


/**
 * Funzioni in JavaScript sono oggetti di prima classe.
 * Questo significa che possiamo:
 * - Assegnarle a variabili
 * - Passarle come parametri
 * - Restituirle da altre funzioni
 *
 * Questo è il concetto che permette l’uso delle callback (che vedremo più avanti).
 */


/**
 * 🧠 RIEPILOGO SEZIONE PER SEZIONE
 */

// 📌 COS'È UNA FUNZIONE?
// - Blocco di codice riutilizzabile
// - Può restituire un valore (return)
// - Si esegue con nome + ()

// 📌 DICHIARARE UNA FUNZIONE
// - Parola chiave: function
// - Nome della funzione
// - Parametri (facoltativi) tra ()
// - Corpo della funzione tra {}
// - return (facoltativo) per restituire un valore

// 📌 USARE UNA FUNZIONE
// - Si esegue con: nomeFunzione()
// - Se ha parametri: nomeFunzione(val1, val2)

// 📌 REFERENZIARE UNA FUNZIONE
// - Non la esegue, ma assegna la funzione stessa a una variabile
// - Permette di usare la funzione con un altro nome o passarla ad altre funzioni


