/**
 * Per cercare direttamente la parte che ti interessa puoi cercare il titolo con ctrl + f.
 * I titoli sono scritti in questo modo:
 * OPERATORI ARITMETICI
 * OPERATORI DI ASSEGNAMENTO
 * OPERATORI DI CONFRONTO
 * OPERATORI LOGICI
 * OPERATORI DI TIPO
 *
 *
 * OPERATORI
 *
 * Gli operatori sono simboli che permettono di eseguire operazioni su variabili e valori.
 * Abbiamo diversi tipi di operatori:
 * -aritmetici: +, -, *, /, %, ++, --
 * -di assegnamento: =, +=, -=, *=, /=, %=
 * -di confronto: ==, ===, !=, !==, >, <, >=, <=
 * -logici: &&, ||, !
 * -di tipo: typeof
 */

/** OPERATORI ARITMETICI
 * Gli operatori aritmetici vengono utilizzati per eseguire operazioni matematiche o di concatenazione di stringhe.
 */
//Esempio:
let a = 10;
let b = 5;
let sum = a + b; //<-- somma delle due variabili
console.log(sum); //<-- 15

let diff = a - b; //<-- differenza delle due variabili
console.log(diff); //<-- 5

let prod = a * b; //<-- prodotto delle due variabili
console.log(prod); //<-- 50

let div = a / b; //<-- divisione delle due variabili
console.log(div); //<-- 2

let mod = a % b; //<-- resto della divisione delle due variabili
console.log(mod); //<-- 0

/**
 * L'operatore + può essere utilizzato anche per concatenare stringhe.
 */
let string1 = "Hello";
let string2 = "World!";
let stringConcat = string1 + " " + string2; //<-- concatenazione delle due stringhe
console.log(stringConcat); //<-- Hello World!

/**
 * Utilizzare un operatore aritmetico senza assegnare il risultato ad una varibiale ci farà perdere il risultato dell'operazione.
 */
//Esempio:
a + b; //<-- 15
console.log(a); //<-- 10
console.log(b); //<-- 5

/**
 * è anche vero che il risultato dell'operazione non sempre ci serve salvarlo in una variabile.
 * in quei casi possiamo anche utilizzare direttamente l'operatore aritmetico nel punto dell'applicazione in cui ci serve.
 */
//Esempio:
console.log(a + b); //<-- 15 , il risultato della somma viene stampato direttamente a console senza salvare il risultato in una variabile

/**
 * L'unico modo per salvare il risultato è salvarlo in una variabile.
 * Possiamo crearne una nuova (Come negli esempi precedenti) oppure sovrascrivere una variabile già esistente.
 */
//Esempio:
a = a + b; //<-- sovrascrittura della variabile 'a' con il risultato della somma
console.log(a); //<-- 15
console.log(b); //<-- 5

/**
 * Abbiamo anche gli operatori di incremento (++) e decremento (--).
 * Questi operatori incrementano o decrementano il valore di una variabile di 1.
 *
 * Gli operatori di incremento e decremento sono delle scorciatoie per scrivere:
 * variabile = variabile + 1; per l'incremento   <-- '++'
 * variabile = variabile - 1; per il decremento  <-- '--'
 *
 * Quindi ricordati che utilizzare uno di quei due operatori è equivalente a sovrascriverne il valore con quest'ultimo incrementato o decrementato di 1.
 */
//Esempio:
let c = 10;
c++; //<-- incremento di 1
console.log(c); //<-- 11
c--; //<-- decremento di 1
console.log(c); //<-- 10

/**
 * Gli operatori di incremento e decremento possono essere messi prima o dopo la variabile.
 * Se messi prima, il valore viene incrementato o decrementato prima di essere utilizzato.
 * Se messi dopo, il valore viene incrementato o decrementato dopo essere utilizzato.
 */
//Esempio:
let d = 5;
console.log(++d); //<-- 6
console.log(d); //<-- 6, il valore di 'd' è 6

let e = 5;
console.log(e++); //<-- 5, prima esegue il console.log e poi incrementa di 1
console.log(e); //<-- 6 successivamente quindi il valore di 'e' è 6

/** OPERATORI DI ASSEGNAMENTO
 * Gli operatori di assegnamento vengono utilizzati per assegnare un valore ad una variabile.4
 * Oltre all'operatore di assegnamento =, abbiamo anche operatori di assegnamento combinati con operatori aritmetici.
 * Questi operatori combinati eseguono un'operazione aritmetica e assegnano il risultato alla variabile allo stesso momento.
 */
//Esempio:
let f = 10;
f += 5; //<-- f = f + 5
console.log(f); //<-- 15

let g = 10;
g -= 5; //<-- g = g - 5
console.log(g); //<-- 5

let h = 10;
h *= 5; //<-- h = h * 5
console.log(h); //<-- 50

let i = 10;
i /= 5; //<-- i = i / 5
console.log(i); //<-- 2

let j = 10;
j %= 5; //<-- j = j % 5
console.log(j); //<-- 0

/**
 * Questi operatori servono come shortcut per scrivere meno codice.
 * Ricordati quindi di utilizzarli quando possibile.
 */

/** OPERATORI DI CONFRONTO
 * Gli operatori di confronto vengono utilizzati per mettere a confronto due valori.
 * Il risultato di un'operazione di confronto è sempre un valore booleano (true o false).
 * Abbiamo diversi tipi di operatori di confronto:
 * -uguaglianza: ==, ===
 * -disuguaglianza: !=, !==
 * -maggiore, minore, maggiore uguale, minore uguale: >, <, >=, <=
 */
/**
 * UGUAGLIANZA
 * Gli operatori di uguaglianza == e === vengono utilizzati per confrontare due valori e vedere se sono uguali.
 * L'operatore == confronta solo il valore effettivo mentre l'operatore === confronta sia il valore che il tipo.
 * Quindi il risultato dell'operazione sarà true se i valori sono uguali, false altrimenti.
 */
//Esempio:
let valoreNumerico = 10;
let valoreTestuale = "10";
console.log(k == l); //<-- true, i valori sono uguali, questo perchè Javascript prova a convertire il valore "10" che è una stringa in un numero
console.log(k === l); //<-- false, i valori sono uguali ma i tipi sono diversi, infatti 'valoreNumerico' è un number mentre 'valoreTestuale' è una stringa
/**
 * Quindi la differenza tra i due operatori sta nel fatto che === è più rigido e confronta anche il tipo.
 * Mentre == è più permissivo e Javascript prova a convertire i valori per fare il confronto.
 *
 * Quindi ricordati in base alla situazione di utilizzare l'operatore piu adatto.
 *
 * Ricordati anche che il risultato dell'operazione RESTITUISCE UN VALORE BOOLEAN.
 */
//Esempio:
let variabileConfronto = valoreNumerico == valoreTestuale; //<-- true
console.log(variabileConfronto); //<-- true, abbiamo salvato il risultato del confronto in una variabile

/**
 * DISUGUAGLIANZA
 * Gli operatori di disuguaglianza != e !== vengono utilizzati per confrontare due valori e verificare se sono diversi.
 * La differenza tra != e !== è la stessa che tra == e ===.
 * Il risultato dell'operazione sarà true se i valori sono diversi, false altrimenti.
 */
//Esempio:
let variabileDisuguaglianza = valoreNumerico != valoreTestuale; //<-- false
console.log(variabileDisuguaglianza); //<-- false, i valori sono uguali se confrontati con !=
console.log(valoreNumerico !== valoreTestuale); //<-- true, i valori sono diversi se confrontati con !==

/**
 * MAGGIORE, MINORE, MAGGIORE UGUALE, MINORE UGUALE
 * Gli operatori di confronto >, <, >=, <= vengono utilizzati per confrontare due valori e verificare se uno è maggiore, minore, maggiore uguale o minore uguale dell'altro.
 * Il risultato dell'operazione sarà true se la condizione è vera, false altrimenti.
 * Questi operatori possono essere utilizzati solo con valori numerici.
 */
//Esempio:
let m = 10;
let n = 5;
console.log(m > n); //<-- true, 10 è maggiore di 5
console.log(m < n); //<-- false, 10 non è minore di 5
console.log(m >= n); //<-- true, 10 è maggiore uguale a 5
console.log(m <= n); //<-- false, 10 non è minore uguale a 5
/**
 * Anche in questo caso ricordati che il risultato dell'operazione RESTITUISCE UN VALORE BOOLEAN.
 * Quindi possiamo salvarlo in una variabile o utilizzarlo direttamente nel punto dell'applicazione in cui ci serve.
 */
//Esempio:
let variabileConfronto2 = m > n; //<-- true
console.log(variabileConfronto2); //<-- true

/** OPERATORI LOGICI
 * Gli operatori logici vengono utilizzati per eseguire operazioni logiche su valori booleani.
 * Con operazioni logiche intendiamo operazioni di aggregazione (AND, OR e NOT) tra piu operatori di CONFRONTO.
 * Quindi in poche parole ci permettono di combinare piu operatori di CONFRONTO in un'unica espressione.
 *
 * Gli operatori logici sono:
 * -AND: &&   <-- restituisce true se tutte le condizioni sono vere
 * -OR: ||    <-- restituisce true se almeno una delle condizioni è vera
 * -NOT: !    <-- restituisce il valore opposto della condizione
 */
//Esempio:
let numero = 10;

let condizione = numero > 5 && numero < 15; //<-- true perchè entrambi i confronti (>, <) sono veri
console.log(condizione); //<-- true

let condizione2 = numero > 5 || numero < 5; //<-- true perchè almeno uno dei confronti (>, <) è vero, infatti numero ha valore 10 ed è maggiore di 5
console.log(condizione2); //<-- true

console.log(!condizione); //<-- false, il valore opposto di true è false, infatti l'operatore '!' restituisce il valore opposto della variabile boolean.
/**
 * NOTA: quando invertiamo un valore con l'operatore '!' si dice che lo stiamo "NEGANDO".
 */

/**
 * Ricorda che possiamo, tramite gli operatori LOGICI, concatenare un numero illimitato di operatori di CONFRONTO.
 */
//Esempio:
let eta = 32;
let sesso = "M";
let altezza = 180;
let peso = 80;

let condizioneMultipla =
  eta > 18 && sesso === "M" && altezza > 170 && peso < 100; //<-- true
console.log(condizioneMultipla); //<-- true, TUTTE le condizioni sono rispettate, infatti l'operatore && restituisce true solo se TUTTE le condizioni sono vere

let condizioneMultiplaFalse =
  eta > 18 && sesso === "F" && altezza > 170 && peso < 100; //<-- false
console.log(condizioneMultiplaFalse); //<-- false, una delle condizioni non è rispettata, infatti sesso è diverso da "M"

/**
 * L'operatore OR restituisce true se ALMENO UNA delle condizioni è vera.
 * infatti la stessa condizione di prima con l'operatore OR restituirà true.
 */

let condizioneMultiplaOR =
  eta > 18 || sesso === "F" || altezza > 170 || peso < 100; //<-- true, perchè basta che almeno UNA delle condizioni sia vera
console.log(condizioneMultiplaOR); //<-- true

/**
 * OPERATORI DI TIPO
 * L'operatore typeof viene utilizzato per restituire il tipo di un valore.
 * Questo operatore restituisce una stringa che rappresenta il tipo del valore passato come argomento.
 * Ricorda che i tipi di valori che possiamo ottenere sono:
 * -string
 * -number
 * -boolean
 * -object
 * -function
 * -undefined
 * -null
 */
//Esempio:
let variabileNumerica = 10;
console.log(typeof variabileNumerica); //<-- number

let variabileTestuale = "Hello";
console.log(typeof variabileTestuale); //<-- string

let variabileBooleana = true;
console.log(typeof variabileBooleana); //<-- boolean

let variabileArray = [1, 2, 3];
console.log(typeof variabileArray); //<-- object

let variabileOggetto = { nome: "Kappa", cognome: "Terletska" };
console.log(typeof variabileOggetto); //<-- object

let variabileFunzione = function () {
  console.log("Ciao Mondo!");
};
console.log(typeof variabileFunzione); //<-- function

let variabileNullo = null;
console.log(typeof variabileNullo); //<-- object

let variabileIndefinito = undefined;
console.log(typeof variabileIndefinito); //<-- undefined

/**
 * Come per tutti gli altri operatori ricordati che anche questo restituisce un valore e che quindi il risultato puo essere salvato in una variabile
 */
//Esempio:
let tipoVariabile = typeof variabileNumerica;
console.log(tipoVariabile); //<-- number
