/*
 * DISPENSA: CLASSI E OGGETTI IN JAVASCRIPT
 *
 * Una classe è un modello (o blueprint) che definisce le caratteristiche e le funzionalità
 * comuni a un insieme di oggetti. In altre parole, la classe descrive sia la struttura (le proprietà)
 * che i comportamenti (i metodi) che gli oggetti creati da essa avranno.
 *
 * Perché usare le classi?
 * - Organizzare il codice: Raggruppare dati e funzioni correlate.
 * - Riutilizzare il codice: Creare oggetti simili in modo efficiente.
 * - Mantenere il codice chiaro: Separare la definizione degli oggetti dalla loro istanziazione.
 *
 * Analogia: Il Progetto Architettonico
 * Immagina di avere il progetto per costruire una casa. Il progetto non è la casa stessa, ma contiene:
 * - Proprietà: come l'indirizzo, il numero di stanze, il colore della facciata.
 * - Metodi: le azioni che la casa può “eseguire” (in senso figurato), ad esempio "accendi le luci" o "apri la porta".
 *
 * In questo scenario:
 * - Il progetto rappresenta la classe.
 * - La casa costruita rappresenta un oggetto (o istanza) della classe.
 *
 * Proprietà vs. Metodi:
 * - Proprietà: attributi o caratteristiche degli oggetti (es. indirizzo, numeroDiStanze).
 * - Metodi: funzioni che definiscono i comportamenti degli oggetti (es. accendiLuci(), mostraDettagli()).
 */

/* Esempio Pratico in JavaScript */

// Definizione della classe "Casa"
class Casa {
  // Il costruttore inizializza le proprietà dell'oggetto
  constructor(indirizzo, numeroDiStanze) {
    this.indirizzo = indirizzo;
    this.numeroDiStanze = numeroDiStanze;
  }

  // Metodo che simula l'accensione delle luci
  accendiLuci() {
    console.log(`Luci accese in casa a ${this.indirizzo}`);
  }

  // Metodo che mostra i dettagli della casa
  mostraDettagli() {
    console.log(`Casa in ${this.indirizzo} con ${this.numeroDiStanze} stanze.`);
  }
}

// Creazione di un oggetto "Casa" usando la classe definita
const miaCasa = new Casa("Via Roma 10", 3);
miaCasa.mostraDettagli(); // Output: Casa in Via Roma 10 con 3 stanze.
miaCasa.accendiLuci(); // Output: Luci accese in casa a Via Roma 10

/*
  A livello tecnico, ecco cosa abbiamo implementato:

  1. COSTRUTTORE:
     - È una funzione speciale all'interno della classe.
     - Viene eseguita automaticamente al momento della creazione di una nuova istanza.
     - Permette di inizializzare le proprietà dell'oggetto, ricevendo in ingresso parametri che definiscono i valori iniziali.

  2. PROPRIETÀ:
     - Sono variabili associate alla classe e, di conseguenza, ad ogni istanza.
     - Descrivono le caratteristiche dell'oggetto (ad esempio, indirizzo, numero di stanze, ecc.).

  3. METODI:
     - Sono funzioni definite all'interno della classe.
     - Descrivono i comportamenti o le azioni che l'oggetto può eseguire.
     - Vengono richiamati utilizzando le istanze della classe.
     *NOTA: Dal momento che vengono definite all'interno di una classe non c'è bisogno della keyword FUNCTION, è implicita.

  4. THIS:
     - Rappresenta la classe corrente e permette di accedere a proprietà e metodi definiti all'interno della classe.
*/
/*
  Esempio classe Persona

  In questo esempio, la classe Persona:
  - Ha un costruttore che inizializza le proprietà: nome, cognome ed eta.
  - Definisce il metodo "saluta", che controlla in modo più semplice e leggibile 
    se le proprietà "nome" o "cognome" sono valorizzate, utilizzando il controllo "truthy".
*/

class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }

  saluta() {
    // Se "nome" è valorizzato (truthy), usalo per salutare
    if (this.nome) {
      console.log(`${this.nome} ti sta salutando`);
    }
    // Altrimenti, se "cognome" è valorizzato, usalo per salutare
    else if (this.cognome) {
      console.log(`${this.cognome} ti saluta`);
    }
    // Se nessuna delle due proprietà è disponibile, mostra un messaggio di default
    else {
      console.log("Una persona ignota ti sta salutando");
    }
  }
}

/* Esempio di utilizzo */

// Caso in cui il nome è presente:
const persona1 = new Persona("Marco", "Rossi", 25);
persona1.saluta(); // Output: Marco ti sta salutando

// Caso in cui il nome è una stringa vuota, quindi viene usato il cognome:
const persona2 = new Persona("", "Verdi", 30);
persona2.saluta(); // Output: Verdi ti saluta

// Caso in cui né nome né cognome sono valorizzati:
const persona3 = new Persona(null, null, 40);
persona3.saluta(); // Output: Una persona ignota ti sta salutando

// Possiamo accedere alle singole proprietà della classe tramite il '.'
let nomePersona1 = persona1.nome;

// Possiamo anche utilizzare il costruttore di "default" presente in ogni classe anche se non dichiarato
const personaVuota = new Persona();
console.log(personaVuota.nome); // Output: 'undefined' <-- se utilizziamo un costruttore di default le nostre proprietà avranno come valore 'undefined'

// Se accediamo ad una proprietà che non esiste, l'applicazione non va in errore, ma quella proprietà sarà undefined
console.log(persona1.annoDiNascita);