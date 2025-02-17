/**
 * OPERATORI
 *
 * Gli operatori sono simboli che permettono di eseguire operazioni su variabili e valori.
 * Abbiamo diversi tipi di operatori:
 * -aritmetici: +, -, *, /, %, ++, --
 * -di assegnazione: =, +=, -=, *=, /=, %=
 * -di confronto: ==, ===, !=, !==, >, <, >=, <=
 * -logici: &&, ||, !
 * -ternario: ? :
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
/**
 * Gli operatori di incremento e decremento sono delle scorciatoie per scrivere:
 * variabile = variabile + 1; per l'incremento   <-- '++'
 * variabile = variabile - 1; per il decremento  <-- '--'
 *
 * Quindi ricordati che utilizzare uno di quei due operatori è equivalente a sovrascriverne il valore con quest'ultimo incrementato o decrementato di 1.
 */

/** OPERATORI DI ASSEGNAZIONE
 * Gli operatori di assegnazione vengono utilizzati per assegnare un valore ad una variabile.4
 * Oltre all'operatore di assegnazione =, abbiamo anche operatori di assegnazione combinati con operatori aritmetici.
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
