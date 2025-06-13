
/*
    Questa è una funzione, ovvero una porzione di codice riutilizzabile, 
    che puo restituire un valore ed accettare dei parametri (valori in input).
*/
function func(array,type){ //parametri 
    if(!func.first){
        func.first=true;
        console.log(`valore di array: ${array}`); //il valore di array viene definito nel momento in cui si richiama la funzione
        console.log(`valore di type: ${type}`);  //stessa cosa per type
    }

    let response = []
    for(let elem of array){
        if(typeof elem === type){
            response.push(elem);
        }
    }

    return response; //Valore restituito
}

//Per eseguire una funzione dobbiamo utilizzare il suo nome con le parantesi tonde comprensive di parametri
let response = func(["Stringa",3,true,{nome:"Nick"},"Stringa2"], "string");
/*
    Quando richiamiamo una funzione dobbiamo sostituire i parametri dichiarati (array,type) con i valori effettivi

    Questo è l'equivalente a fare:   
    - array = ["Stringa",3,true,{nome:"Nick"},"Stringa2"]
    - type = "string"

    Infatti noi all'interno della funzione ci dobbiamo basare su una previsione dei valori passati,
    nel senso che non sappiamo esattamente quale sarà il valore effettivo passato 
    ma possiamo dedurre dal nome piu o meno di cosa si tratta (specialmente se abbiamo dichiarato noi la funzione)
*/
console.log(`---------------\n\nValore restituito da func: \n${response}`);
/*
    E 'response' cosa è? 

    è semplicemente una variabile.
    Quando una funzione ritorna un valore vuol dire che scrivere questo:

    func(["Stringa",3,true,{nome:"Nick"},"Stringa2"], "string");
                        EQUIVALE A SCRIVERE
    ['Stringa', 'Stringa2']

    Ovvero il risultato della funzione. (il valore che sta subito dopo il return)

    Quindi se vogliamo utilizzare il valore che viene restituito dalla funzione conviene salvarlo all'interno di una variabile
    in modo tale che abbiamo quel valore sempre a disposizione per poterlo riutilizzare.
*/


/*
    Un'altra cosa da tenere a mente è che le funzioni di per se sono già dei valori.

    Infatti (Function) fa parte dei tipi di dati presenti in Javascript.

*/

let typeOfFunc = typeof func; //function
// console.log(typeOfFunc); //!!TOGLI COMMENTO!!//

/*
    Nota bene!!

    ho scritto:
        func
    non:
        func([],"");


    Quando scrivi solo il nome della funzione fai riferimento ad essa come oggetto funzione e non come ciò che restituisce

    Quando eseguiamo una funzione (con le parentesi tonde) stiamo eseguendo il codice interno
    e quello che otteniamo è il valore del return (o undefined se non c'è)

    Ma se usiamo solo il nome (senza le parentesi tonde) stiamo facendo riferimento alla funzione stessa come oggetto
*/

let funcObj = func;
let funcReturn = func([1,true,3,"4"],"number");

// console.log(`Valore di funcObj: \n${funcObj}\n--------------------\n\nValore di funcReturn\n${funcReturn}`) //!!TOGLI IL COMMENTO!!//

/*
    Ora che sappiamo che le funzioni sono dei VALORI (come oggetti) parliamo delle funzioni anonime e delle arrow function
*/

let funcAnonima = function(a,b){return a+b;}  // FUNZIONE ANONIMA (senza nome)
let funcArrow = (a,b) => a+b;                 // FUNZIONE FRECCIA (senza nome, senza parentesi,senza return)*se c'è una singola istruzione*

// console.log(`Funzione anonima: \n${funcAnonima}\n-------------------\n\nFunzione freccia: \n${funcArrow}`); //!!TOGLI COMMENTO!!//

/*
    a differenza delle funzioni normali (Quelle NOMINATIVE) 
    le funzioni freccia e quelle anonime sono solo dei valori.

    Quando dichiari una funzione normale, gli diamo un nome che è l'equivalente di assegnarlo ad una variabile per riutilizzarla.
    
    NORMALE
        function somma(a,b){
            return a + b;
        }
    ANONIMA
        function(a,b){
            return a + b;
        }
    FRECCIA
        (a,b) => a + b;


    Nel caso di quella normale abbiamo il nome "somma" che ci permette di utilizzarla quindi 
        -somma = (corpo funzione)

    Negli altri due casi invece abbiamo solo il corpo della funzione quindi un valore vuoto
    che viene mangiato dal garbage collectors se non lo utilizziamo o assegniamo ad una variabile

*/

"Stringa"; // Se scrivo una stringa in questo modo non ha senso , perchè non posso utilizzarla in nessun modo senza il nome
(a,b) => a + b; // Lo stesso vale per le funzioni anonime o le arrow function, cosi non ci faccio nulla perchè non posso utilizzarla

// quindi abbiamo le variabili
let stringa = "Stringa";
let funcArrow2 = (a,b) => a+b;

/*
    Una funzione assegnata ad una variabile si puo utilizzare esattamente come si utilizzano le funzioni normali

    solo che il nome è quello della variabile a cui abbiamo assegnato
*/

let responseSomma = funcArrow2(3,4); // risultato:  7

/*
    Ora che sappiamo che le funzioni possono essere assegnate come valori a delle variabili parliamo di

    CALLBACK

    ovvero le funzioni che sono passate come parametri ad altre funzioni.
*/

function funcCallBack(array, callback){
    /*
        Come puoi vedere dal console log sotto, sia array che callback prendono i valori passati, come tutti gli altri parametri
    */
    // console.log(`Il valore dell'array: \n${array}\n--------\nIl valore della callback:\n${callback}`) //!!TOGLI IL COMMENTO!!//
    let response = [];
    let first = true;
    for(let elemento of array){
        let responseCallback = callback(elemento); //essendo di tipo function possiamo eseguirla, come tutte le altre funzioni
        // console.log(first ? `Stampiamo i valori della callback del primo giro del ciclo for:\nValori della callback: \n-parametro (elemento): ${elemento} \nvalore restituito: ${responseCallback}` : ""); //!!TOGLI IL COMMENTO!!//
        first = false;
        response.push(responseCallback) //essendo una function (callback) puo restituire dei valor, come tutte le altre funzioni
    }
    return response;
}

/* 
    Il valore dei parametri
    array:
        -valore: ["Stringa","TRINGA","RENGA","ReNnA"]
        -tipo: array
    callback:
        -valore: (stringa) => stringa.toLowerCase()
        -tipo: function

*/
let responseCallback = funcCallBack(["Stringa","TRINGA","RENGA","ReNnA"], (stringa) => stringa.toLowerCase());

// console.log(`Il risultato di funcCallBack è: \n${responseCallback}`) //!!TOGLI IL COMMENTO!!//

/*
    Ricorda che una CALLBACK è semplicemente un parametro di una funzione a cui viene passato come valore un'altra funzione.

    Non è importante che venga scritta direttamente una funzione anonima o una arrow function dentro le tonde.

    Quello è solo un valore!!! Esattamente come lo è una stringa o un numero
*/

//Prendiamo questa funzione come esempio
function example(stringa){
    return stringa.toLowerCase();
}
//Una semplice funzione che accetta una stringa come parametro e restituisce la stessa stringa in minuscolo

let responseStringEx = example("NICK"); // Possiamo passare direttamente un valore di tipo STRINGA come parametro

let stringaParam = "NICK"; // ma possiamo anche avere una variabile che contiene una stringa...
let responseStringEx2 = example(stringaParam); //...e passare quella variabile come parametro


// console.log(`Valore passato direttamente: \n${responseStringEx} \n-----------------\n\nValore passato tramite variabile: \n${responseStringEx2}`) //!!TOGLI IL COMMENTO!!//
/*
    Il risultato NON cambia!!!

    da una parte abbiamo passato il valore direttamente..

    ..dall'altra gli abbiamo passato una variabile che contiene quel valore

    Questo discorso puo essere applicato su tutti i tipi di valore, comprese le FUNZIONI
*/

//CALLBACK passata direttamente come valore
funcCallBack(["STRINGA"], (stringa) => stringa.toLowerCase());

//CALLBACK passata tramite una variabile
let callbackParam = (stringa) => stringa.toLowerCase();
funcCallBack(["STRINGA"], callbackParam);

/*
    Ricorda che anche le funzioni normali (quelle con il nome) sono delle "variabili".

    Quindi possiamo passargli anche direttamente quelle
*/

//CALLBACK passata tramite funzione normale
funcCallBack(["STRINGA"], example); //example è dichiarata a riga 183


//FUNZIONE OGGETTO

function funcLikeObject(param){
    funcLikeObject.count++ //Sto incrementando una variabile interna creata da me ogni volta che viene richiamata la funzione
}

/*
    Prendiamo come esempio la funzione appena dichiarata.

    Abbiamo detto che le funzioni, se non eseguite (quindi richiamate senza le parentesi tonde) sono dei valori. (function)

    Il tipo di dato "function" in Javascript ha delle cose in comune con gli Object.

    Come la possibilità di creare delle variabili intern.
*/

//// stiamo creando una variabile di tipo stringa dentro l'oggetto funzione.
funcLikeObject.variabile = "Sono una variabile di tipo stringa appena creata"; 

// console.log(funcLikeObject.variabile); //!!SCOMMENTAMI!!

/*
 questo ci permette di avere delle informazioni personalizzate sulle funzioni sempre a disposizione

 come per esempio il numero di volte che sono state eseguite
*/

funcLikeObject.count = 0;

funcLikeObject();
funcLikeObject();
funcLikeObject();

// console.log(`La funzione funcLikeObject è stata richiamata: ${funcLikeObject.count}`); //!!SCOMMENTAMI!!

/*
    Le funzioni hanno anche una serie di property predefinite che ci permettono di conoscere alcune informazioni 

    Facciamo qualche esempio:
*/

funcLikeObject.length; //Il numero dei parametri che accetta
funcLikeObject.name;   //Il nome della funzione (funcLikeObject)
funcLikeObject.arguments; //I valori passati come parametri (va richiamata DENTRO la funzione, sennò è sempre null)

/*
    RICAPITOLANDO :

    LE FUNZIONI..
    1. Sono porzioni di codice riutilizzabili, mirate a risolvere un determinato problema

    2. Possono accettare dei parametri 

    3. Possono restituire un valore (undefined se non c'è il return)

    4. Sono dei valori (function fa parte delle tipologie di dato disponibili)

    5. Possono essere assegnate a variabili (senza parentesi tonde) o eseguite (con parentesi tonde)

    6. Ne abbiamo 3 tipi: normali(con nome), anonime, freccia

    7. Le funzioni anonime e freccia, se non assegnate ad una variabile o eseguite, sono inutili (garbage collector)

    8. Le funzioni passate come parametro ad un'altra funzione sono chiamate CALLBACK

    9. Le CALLBACK sono parametri (quindi variabili) che contengono una funzioni, quindi puo essere eguita
    
    10. QUALUNQUE valore di tipo funzione puo essere assegnato ad una callback. Sia passato direttamente tra le tonde,
    sia assegnato ad una variabile e poi passato, sia una funzione con il nome.

    11. Sono simili a degli oggetti, quindi possiamo creare delle proprietà personalizzate o accederne alcune preimpostate
    che rivelano alcune informazioni riguardanti la stessa.
*/
