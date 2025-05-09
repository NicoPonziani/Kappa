/**
 * FUNZIONI ANONIME
 * 
 * Una funzione anonima è una funzione che non ha un nome.
 * 
 * Questo comporta che non potrai riutilizzare la funzione anomina in ogni punto dell'applicazione.
 * Quindi sono delle funzioni "usa e getta".
 * 
 * Ma c'è un eccezione, ovvero possiamo referenziarle in una variabile per poterle riutilizzare.
 */

let saluta = function(){ // stiamo assegnando una funzione anonima ad una variabile
    console.log("CIAO");
}

saluta();

/**
 * REFERENZIARE FUNZIONE ANONIMA Vs FUNZIONE CON NOME
 * 
 * Una funzione anonima non viene caricata subito in memoria nell'applicazione (fase di compilazione),
 * viene caricata in memoria nel momento in cui viene utilizzata o assegnata ad una variabile.
 * 
 * Infatti ,a differenza di una funzione con il nome, non possiamo utilizzare una funzione anonima in qualunque
 * punto del nostro script, possiamo utilizzarla solamente DOPO che l'abbiamo dichiarata (anche in caso di REFERENCE)
 * 
 */

// somma(1,2); // qui viene generato un errore, perchè sto utilizzando la funzione prima della dichiarazione
let somma = function(a,b){
    return a+b;
}


/**
 * ARROW FUNCTION
 * 
 * Le funzioni freccia hanno un comportamento molto simile alle funzioni anonime, con la differenza che però mantengono
 * il contesto globale.
 * 
 * Vediamo un esempio di funzione freccia.
 */

let sommaArr = (a,b) => a+b;

/**
 * Analizziamo le differenze:
 * 1. La parola chiave "function" viene omessa, perchè implicita
 * 2. abbiamo i parametri dichiarati nello stesso identico modo
 * 3. L'operatore freccia (=>) serve ad indicare che stiamo per eseguire il corpo della funzione
 * 4. le parentesi graffe {} verranno omesse nel caso in cui ci sia una singola istruzione
 * 5. anche il return verrà omesso se c'è una singola istruzione
 */

let arr = () => { // nel caso in cui ci sono piu istruzioni sono necessarie le parentesi graffe
    let nome = "Nick"; //istruzione 1
    let cognome = "Pon"// istruzione 2
    return nome + " " + cognome; // anche la parola chiave "return" è obbligatoria se vogliamo restituire un valore
}

/**
 * DIFFERENZA DI CONTESTO (this)
 */

const persona = {
    nome: "Mario",
    salutaTradizionale: function () {
        console.log("Ciao sono " + this.nome); // funziona: this si riferisce all’oggetto persona
    },
    salutaFreccia: () => {
        console.log("Ciao sono " + this.nome); // this è undefined o globale, NON l’oggetto persona
    }
};

persona.salutaTradizionale(); // Ciao sono Mario
persona.salutaFreccia();      // Ciao sono undefined


/**
 * CALLBACK
 * 
 * Una CALLBACK è una funzione passata come ARGOMENTO a un'altra funzione.
 * 
 * In pratica, una funzione "ospitante" riceve una funzione "invitata", e può
 * decidere QUANDO eseguirla, ad esempio:
 * - Subito
 * - Dopo un certo tempo (es. setTimeout)
 * - Su ogni elemento di un array (es. forEach)
 * - Dopo aver finito un compito (es. una richiesta al server)
 * 
 * È importante ricordare che:
 * 1. Passiamo la REFERENCE della funzione, non l’esecuzione → quindi SENZA parentesi tonde.
 * 2. Sarà la funzione ospitante a decidere QUANDO e COME eseguirla.
 * 
 * ESEMPI CONCRETI
 */

// 1. Funzione anonima come callback
[1, 2, 3].forEach(function (num) {
    console.log(num * 2);
});

// 2. Arrow function come callback (più compatta)
[1, 2, 3].forEach(num => console.log(num * 2));

// 3. setTimeout con funzione anonima
setTimeout(function () {
    console.log("Eseguito dopo 1 secondo");
}, 1000);

// 4. setTimeout con arrow function
setTimeout(() => {
    console.log("Eseguito con arrow function");
}, 1000);


/**
 * 🧠 RIEPILOGO
 */

// 📌 Funzioni anonime:
// - Non hanno nome
// - Non si possono usare prima della dichiarazione
// - Possono essere assegnate a variabili
// - Molto usate come callback

// 📌 Arrow functions:
// - Sintassi più compatta
// - Non creano un proprio "this"
// - Usano il "this" del contesto esterno
// - Perfette per funzioni brevi, specialmente callback

// 📌 this:
// - Nelle funzioni tradizionali: dipende da *come* viene chiamata la funzione
// - Nelle arrow functions: prende il valore di `this` dal contesto in cui è stata definita

