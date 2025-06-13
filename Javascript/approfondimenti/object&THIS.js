/*
    Un oggetto in Javascript è una rappresentazione di una qualunque entità tramite proprietà e metodi
*/

let persona = {
    nome: "Kappa",
    eta: 33
}

// console.log(persona); 

//Le proprietà all'interno di un oggetto sono delle variabili accessibili solo tramite l'oggetto stesso tramite il PUNTO
// console.log(`Il nome di questa persona è: ${persona.nome}`) //⚠️!!SCOMMENTAMI!!⚠️

persona.nome = "Nick"; //Essendo delle variabili, possiamo cambiargli il valore direttamente tramite l'operatore UGUALE

/*
    Mentre i metodi invece sono delle FUNZIONI presenti all'interno degli oggetti
*/

persona = {
    nome: "Nick",
    eta: 32,
    saluta(){
        console.log(this.nome);
    }
}

//⚠️!!SCOMMENTAMI!!⚠️
// persona.saluta(); // Anche i metodi sono accessibili solo tramite l'oggetto tramite il PUNTO

/*
    Essendo i metodi delle funzioni vere e proprie possono essere assegnate anche a delle proprietà

    Proprio come nel capitolo delle funzioni
*/ 


persona = {
    nome: "Nick",
    eta: 32,
    saluta: function(){console.log(this.nome)}
}

/*
    il risultato NON cambia
*/ 
// persona.saluta(); //⚠️!!SCOMMENTAMI!!⚠️

/*
    e quel THIS?

    All'interno di un oggetto il THIS fa riferimento all'oggetto stesso

    quindi se ho un oggetto "persona" , THIS sarà "persona"
*/

persona = {
    nome:"Nick",
    eta: 32,
    thisUgualePersona(){
        console.log(`this === persona?\nrisultato: ${this === persona}`) // Come potrai vedere dai log, il risultato è TRUE
        // sono la stessa cosa
    }
}

// persona.thisUgualePersona(); //⚠️!!SCOMMENTAMI!!⚠️

/*
    Quindi OGNI VOLTA che dobbiamo fare riferimento all'oggetto, DENTRO l'oggetto stesso

    dobbiamo utilizzare il THIS e non PERSONA.
*/

/*=========================================================================================================*/

/* SHALLOW COPY */
personaCopia = persona; //Sto eseguendo una ShallowCopy della persona

/*
    ShallowCopy 
    
    Facciamo finta che questa è la memoria di JAVASCRIPT
    -------------------------------
    |  ----                        |   
    | | 🚪 |                       |  Ogni quadrato rappresenta la memoria allocata da oggetti,variabili,funzioni ect..
    |  ----                        |    mentre la porta rappresenta il punto di accesso (per esempio il nome di una variabile)
    |                              |
    |  ---------                   | Questo quadrato è la memoria del nostro oggetto "persona"
    | |         |                  |
    | | 🚪  🚪 |                  | L'oggetto persona ha DUE porte, poichè facendo una copia non stiamo CREANDO un nuovo oggetto
    |  ---------                   | bensi stiamo semplicemente creando una nuova porta di accesso per quel valore
    -------------------------------

    Quindi per concludere sia la variabile "personaCopia" che la variabile "persona" stanno puntando allo stesso oggetto
*/

/*
    Facciamo qualche esempio per dimostrare questa logica
*/

persona.nome = "Milo"; //Stiamo modificando l'oggetto tramite la variabile "persona"


// console.log(`Variabile persona: ${persona.nome} \nVariabile personaCopia: ${personaCopia.nome}`) //⚠️!!SCOMMENTAMI!!⚠️
/*
    Come puoi vedere modificando l'oggetto puntato da "persona" viene modificato anche l'oggetto puntato da "personaCopia"

    Questo perchè in realtà il valore contenuto da queste due variabili è lo stesso.
*/

personaCopia.eta = 34; // stessa cosa anche se facciamo l'inverso.

/*=====================================================================================================*/

//DEEP COPY
personaCopia = {...persona} // Stiamo eseguendo una Deep Copy dell'oggetto tramite lo spread operator

/*
    ShallowCopy 
    
    Facciamo finta che questa è la memoria di JAVASCRIPT
    -------------------------------
    |  ----                        |   
    | | 🚪 |                       |  Ogni quadrato rappresenta la memoria allocata da oggetti,variabili,funzioni ect..
    |  ----                        |    mentre la porta rappresenta il punto di accesso (per esempio il nome di una variabile)
    |                              |
    |  ----  ----                   | 
    | |   |  |  |                  |
    | | 🚪| |🚪|                  | 
    |  ----  ----                   | Quando eseguiamo una deep copy, stiamo creando un nuovo oggetto con un suo punto di accesso
    -------------------------------

    Quindi per concludere sia la variabile "personaCopia" che la variabile "persona" puntano ad un oggetto differente
*/

/*
    Ed è proprio in casi come questo che l'utilizzo corretto del THIS all'interno degli oggetti è fondamentale
*/

//Creiamo un nuovo oggetto 
let car = {
    modello:"Toyota",
    proprietario: "Nick",
    cambiaProprietario(nuovoProprietario){
        car.proprietario = nuovoProprietario; //Stiamo VOLUTAMENTE omettendo l'uso del THIS
    }
}

let carCopy = {...car}; //Stiamo copiando l'oggetto come nell'esempio precedente

carCopy.cambiaProprietario("Kappa"); // Stiamo eseguendo il metodo che assegna un nuovo valore alla property proprietario

//Stampiamo nei log i PROPRIETARI delle due macchine
 //⚠️!!SCOMMENTAMI!!⚠️
// console.log(`Variabile car.proprietario: ${car.proprietario} ❌ modificato \nVariabile carCopy.proprietario: ${carCopy.proprietario} `);
/*
    Possiamo notare come cosi facendo stiamo modificando il proprietario dell'oggetto originale e non della copia

    Questo perchè nel metodo cambiaProprietario non stiamo facendo riferimento all'oggetto che sta facendo la chiamata (THIS)
    bensi all'oggetto "car" a prescindere da chi effettua la chiamata.

    Ecco perchè viene modificato l'oggetto "car" a prescindere da chi sia a chiamare il metodo
*/

let car2 = {
    modello:"Toyota",
    proprietario: "Nick",
    cambiaProprietario(nuovoProprietario){
        this.proprietario = nuovoProprietario; //Stavolta invece utilizziamo il THIS
    }
}

let carCopy2 = {...car2}; //Stiamo copiando l'oggetto come nell'esempio precedente

carCopy2.cambiaProprietario("Kappa");

 //⚠️!!SCOMMENTAMI!!⚠️
console.log(`Variabile car.proprietario: ${car.proprietario} \nVariabile carCopy.proprietario: ${carCopy.proprietario} ✅ modificato `);
/*
    Se utilizziamo il THIS invece, verrà modificato l'oggetto da cui parte la chiamata sempre,a prescindere da chi la fa
*/

/*
    RICAPITOLANDO:

    GLI OGGETTI..
    1. Sono una rappresentazione, di una qualunque cosa che vogliamo descrivere, fatta tramite proprietà e metodi

    2. Le proprietà sono variabili mentre i metodi sono delle funzioni

    3. Per accedere ad una proprietà o ad un oggetto dobbiamo farlo tramite il punto (oggetto.proprieta o oggetto.metodo())

    4. All'interno di un oggetto possiamo usare la parola chiave THIS per fare riferimento a se stesso

    5. Gli oggetti si possono copiare in due modi:
        -DEEP COPY: tramite spread operator, crea due oggetti differenti
        -SHALLOW COPY: direttamente tramite l'uguale, l'oggetto rimane uno, creiamo solo un nuovo punto di accesso
*/