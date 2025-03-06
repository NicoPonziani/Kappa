/**
 * LOOPS
 *
 * Che cosa sono i loop?
 * I loop (o cicli) rispondono alla necessità di eseguire un blocco di codice più volte, a seconda del numero di iterazioni richieste.
 * Spesso, nelle nostre applicazioni, dobbiamo ripetere una serie di operazioni: per esempio, leggere ogni singolo elemento di un array o
 * elaborare una collezione di dati. I loop ci permettono di fare proprio questo, utilizzando delle parole chiave speciali per controllare
 * l'esecuzione ripetuta del codice.
 *
 * I principali tipi di loop in JavaScript sono:
 * - FOR: ideale quando conosciamo in anticipo il numero di iterazioni.
 * - WHILE: esegue il blocco di codice finché una condizione risulta vera.
 * - DO WHILE: esegue il codice almeno una volta, per poi continuare se la condizione è soddisfatta.
 *
 */

/*
  FOR

  Il ciclo for in JavaScript permette di ripetere un blocco di codice un numero specifico di volte, grazie a tre elementi fondamentali:

  - INDICE:
    Una variabile (solitamente numerica) che tiene traccia dell'iterazione corrente. 
    È particolarmente utile, ad esempio, per accedere agli elementi di un array.

  - CONDIZIONE:
    Un'espressione booleana che determina quando il ciclo deve terminare. 
    Finché la condizione risulta vera, il ciclo continua; quando diventa falsa, il ciclo si ferma.

  - ITERATORE:
    L'istruzione che modifica l'indice ad ogni iterazione (ad esempio, incrementandolo) 
    per avvicinarsi al punto in cui la condizione non sarà più soddisfatta.

  Metafora del barman:
  Immagina di essere un barman e di ricevere l'ordine per preparare 5 cocktail identici.
  - La CONDIZIONE è "preparare 5 cocktail".
  - L'INDICE rappresenta il numero di cocktail già preparati.
  - L'ITERATORE è l'azione che incrementa il conteggio ad ogni cocktail completato.

  In altre parole, il ciclo for ti aiuta a ripetere l'azione di preparare un cocktail, 
  una volta per ogni cocktail richiesto, fino a completare l'ordine.
*/

for (let cocktail = 1; cocktail <= 5; cocktail++) {
  console.log(`🍹 Cocktail numero ${cocktail} pronto!`);
}

/*
  Ora applichiamo lo stesso concetto alla lettura degli elementi di un array.
*/
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/*
  Cosa abbiamo fatto?

  La variabile 'i' tiene traccia dell'indice corrente, ossia di dove siamo nell'array.
  Ricorda che, come abbiamo visto, ogni elemento dell'array (la "scatolina") ha un'etichetta numerica,
  e JavaScript inizia a numerarle da 0. Quindi, al primo giro del ciclo, 'i' vale 0 e accediamo al primo elemento.


  La nostra condizione nel ciclo è che il numero di iterazioni deve essere MINORE del numero di elementi dell'array.
  
  Ma perché usiamo "minore" e non "minore o uguale"?
  
  - L'array.length ci dice quanti elementi sono presenti nell'array: nel nostro caso, 5.
  - Ricorda che la numerazione degli indici inizia da 0. Quindi, in un array di 5 elementi, gli indici validi vanno da 0 a 4.
  - Se usassimo la condizione "i <= array.length", l'ultima iterazione avrebbe i = 5, che non corrisponde a nessun elemento esistente.
  - In questo caso, l'accesso array[5] restituirebbe "undefined", poiché non esiste un sesto elemento.

  In sintesi, usando "i < array.length" garantiamo che il ciclo iteri solo sugli indici validi (da 0 a 4) e evitiamo errori.

  Infine, abbiamo "i++". Come abbiamo già visto nel capitolo sugli operatori,
  l'operatore incrementale (++) equivale a scrivere "i = i + 1". 
  In altre parole, ad ogni iterazione del ciclo, incrementiamo il valore di "i" di 1.
  
  Questo incremento è fondamentale perché, ad ogni ciclo, spostiamo l'indice
  verso il raggiungimento della condizione di terminazione (i < array.length).
  
  In questo esempio, incrementare di 1 è perfetto, poiché vogliamo leggere ogni singolo elemento dell'array.
  Naturalmente, in altri scenari potremmo voler aumentare l'indice di un valore maggiore,
  ma qui "i++" si adatta perfettamente alle nostre necessità.
*/

/*
    Vediamo ancora un esempio per comprendere meglio il FOR
*/

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

/*
    In questo caso abbiamo completamente ribaltato la situazione.

    Il CORPO del ciclo (ovvero la parte tra le parentesi graffe) è rimasto invariato,
    e ciò che è cambiato sono i parametri del ciclo:

    - Inizializzazione:  
      Invece di iniziare da 0, la variabile "i" parte da "array.length - 1", che corrisponde all'ultimo indice dell'array.

    - Condizione:  
      Il ciclo continua finché "i" è maggiore o uguale a 0, assicurando che vengano processati tutti gli elementi fino al primo.

    - Iteratore:  
      Al posto di incrementare "i" con "i++", utilizziamo "i--" per decrementare il valore ad ogni iterazione,
      così da spostarci all'indietro attraverso l'array.

    In questo modo, il ciclo for itera l'array al contrario, partendo dall'ultimo elemento e procedendo verso il primo.
*/

/*
    IN SINTESI, il ciclo for è composto da:
    - Un indice: ci aiuta a tenere traccia del progresso verso il nostro obiettivo definito dalla condizione.
    - Una condizione: stabilisce quando il ciclo deve terminare.
    - Un iteratore: aggiorna l'indice ad ogni iterazione, permettendoci di progredire verso il raggiungimento della condizione.
    - Il corpo del ciclo: il blocco di codice racchiuso tra parentesi graffe, dove eseguiamo le operazioni desiderate ad ogni iterazione.
*/

/*
    CICLO WHILE
    Il ciclo WHILE, a differenza del ciclo FOR non ha bisogno di tutti i parametri che abbiamo indicato nel ciclo FOR.
    

*/
