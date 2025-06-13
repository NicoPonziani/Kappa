/*
    Ma il THIS ha lo stesso comportamento anche nelle funzioni oggetto?

    -NO!!! 

    il this dentro una funzione è SEMPRE undefined

    (Ovviamente non sto parlando dei METODI, ma solo delle funzioni scritte altrove)
*/

//Esempi:

//funzione semplice
function example(){
    console.log(this); 
    /*
        Qui il THIS può avere valori diversi a seconda dei contesti:
        -in node.js (undefined)
        -su una pagina HMTL (oggetto Window)
        -su js base (l'oggetto globale THIS)
    */
}

// example(); 

//quindi anche se creiamo una nostra variabile 
function example2(){
    console.log(this.variabile); //stampo la variabile creata
}
example2.variabile = "VARIABILE"; //Creo la variaile

// example2(); //risultato: undefined
/*
    Anche se ho creato la variabile, l'oggetto FUNZIONE non ha un proprio THIS, quindi non posso utilizzarlo per accedere
    alle informazioni interne.

    Solo se la funzione è dichiarata dentro un oggetto (METODO) allora il THIS prende il valore dell'oggetto in cui è dichiarata
*/

/*
    THIS,METODI e CALLBACK
*/
let oggetto = {
    nome:"Oggetto",
    metodoInterno(){
        console.log(this.nome);
    }
}
