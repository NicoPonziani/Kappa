/**
 * VARIABILI
 *
 * Le variabili sono contenitori per memorizzare valori.
 * In javascript abbiamo diverse tipologie di valori:
 * -number       <-- valore numerico
 * -string       <-- valore testuale
 * -boolean      <-- valore booleano (true/false)
 * -array        <-- collezione di valori
 * -object       <-- oggetto (Ovvero un insieme di proprietà, che sono variabili, e di funzioni, che sono metodi)
 * -function     <-- funzione (ovvero un blocco di codice che può essere richiamato)
 * -null         <-- valore nullo
 * -undefined    <-- valore indefinito
 *
 * Per dichiarare una variabile in javascript si utilizza la parola chiave LET seguita dal NOME della variabile.
 */
//Esempio:
let nomeVariabile; //<-- dichiarazione di una variabile

/**
 * Quando dichiariamo una variabile ma non gli assegniamo un valore, come nell'esempio precedente, il valore della variabile sarà undefined.
 */
console.log(nomeVariabile); //<-- undefined

/*
 * Il nome della variabile è un identificatore e può essere composto da lettere, numeri, underscore e dollaro. Non può iniziare con un numero.
 * Anche se il nome lo scegliamo noi, i solito il nome delle variabili dovrebbe dare un'idea di cosa rappresenta quel valore.
 */
//Esempio:
let cognome; //<-- il nome della variabile ci fa capire già che si tratta di un cognome e che molto probabilmente conterrà una stringa.

/**
 * Per assegnare un valore alla variabile, utilizziamo l'operatore di assegnazione = seguito dal valore che vogliamo assegnare.
 */
//Esempio:
cognome = "Ponziani"; //<-- assegnamento di un valore alla variabile cognome

/**
 * Da notare che per assegnare il valore alla nostra variabile non abbiamo riutilizzato la parola chiave LET.
 * Questo perché la variabile cognome è già stata dichiarata precedentemente e quindi non serve utilizzare di nuovo il LET.
 * Praticamente una volta dichiarata la variabile, quest'ultima esiste già e possiamo assegnarle un valore senza doverla dichiarare di nuovo.
 *
 * Ora la nostra variabile cognome ha il valore "Ponziani" a cui possiamo accedere semplicemente richiamando il nome della variabile.
 */
//Esempio:
console.log(cognome); //<-- Ponziani

/**
 * Se vogliamo dichiarare e assegnare un valore alla variabile nello stesso momento, possiamo farlo in un'unica riga di codice.
 */
//Esempio:
let eta = 32; //<-- dichiarazione e assegnamento di un valore alla variabile eta
console.log(eta); //<-- 32

/**
 * Di seguito una serie di esempi di dichiarazione e assegnamento di variabili con valori di diversi tipi.
 */
let nome = "Kappa"; //<-- string
let anno = 1992; //<-- number
let isSquirrel = true; //<-- boolean
let array = [1, 2, 3]; //<-- array
let persona = { nome: "Kappa", cognome: "Terletska" }; //<-- object
let funzione = function () {
  console.log("Ciao Mondo!");
}; //<-- function
let nullo = null; //<-- null
let indefinito = undefined; //<-- undefined

/**
 * Per accedere al valore di una variabile, basta richiamare il nome della variabile.
 */
//Esempio:
console.log(
  `Il mio nome è ${nome} e sono nata nel ${anno} , sono uno scoiattolo? ${isSquirrel}`
); //<-- Il mio nome è Kappa e sono nata nel 1992 , sono uno scoiattolo? true

/**
 * Ad una variabile è possibile assegnare un nuovo valore in qualsiasi momento.
 * Quando assegnamo un nuovo valore ad una variabile, il valore precedente viene sovrascritto.
 */
//Esempio:
nome = "Nick"; //<-- sovrascrittura del valore della variabile nome
console.log(nome); //<-- Nick

/**
 * Se vogliamo creare una varibile che non possa essere modificata, possiamo utilizzare la parola chiave CONST.
 * Quindi se sappiamo che il valore di una variabile non dovrà mai cambiare, è buona pratica utilizzare la parola chiave CONST.
 */
//Esempio:
const PI = 3.14; //<-- dichiarazione di una costante
console.log(PI); //<-- 3.14
PI = 3.14159; //<-- Quando eseguiremo questo codice riceveremo un errore! Non possiamo modificare il valore di una costante

/**
 * Ricordati che javascript è un linguaggio di programmazione imperativo, quindi il codice viene eseguito in sequenza.
 * Questo significa che le istruzioni vengono eseguite nell'ordine in cui sono scritte.
 * Quindi se proviamo ad accedere ad una variabile prima di dichiararla, otterremo un errore.
 */
//Esempio:
console.log(variabileNonDichiarata); //<-- Errore! variabileNonDichiarata is not defined
let variabileNonDichiarata = "Ciao Mondo!"; //<-- dichiarazione e assegnamento di un valore alla variabile variabileNonDichiarata

/**
 * Per riassumere:
 * -LET: per dichiarare una variabile
 * -CONST: per dichiarare una costante
 * -VAR: per dichiarare una variabile globale (ma non è più utilizzata)
 * -per accedere al valore di una variabile si utilizza il suo nome
 * -per assegnare un valore ad una variabile si utilizza l'operatore di assegnazione =
 * -se dichiariamo una variabile ma non gli assegniamo un valore, il suo valore sarà undefined
 * -una variabile può contenere valori di diversi tipi
 * -una variabile può essere sovrascritta con un nuovo valore (tranne le costanti)
 * -una variabile può essere dichiarata e assegnata in un'unica riga di codice
 */
