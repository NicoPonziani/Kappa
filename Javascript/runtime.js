// "use strict";

// const ele = document.querySelector("div");

// let newEle = document.createElement("div");
// newEle.style.backgroundColor = "blue";
// let h1NewEle = document.createElement("h1");
// h1NewEle.style.fontSize = 20;
// h1NewEle.style.color = "red";
// h1NewEle.innerHTML = "HelloWorld";

// newEle.append(h1NewEle);

// document.body.appendChild(newEle);


// async function callUri(){
//     const url = "https://example.org/products.json";
//     fetch(url).then(async (response) => {return await response.json()})
//                 .catch((reason) => reason.text)
//                 .finally(() => alert("Errore durante la chiamata"));

//     try {
//        let response =  await fetch(url);
//        if(response.ok)
//         return await response.json();
       
//        throw new Error(response.status);
//     } catch (error) {
//        alert(error); 
//     }
// }

// callUri();

function generaNumeri() {
  // Ottieni valore inserito dall'utente
  const numeroMax = parseInt(document.getElementById("numeroInput").value);
  const lista = document.getElementById("listaNumeri");

  // Pulisce la lista precedente
  lista.innerHTML = "";

  // Controlla che l'input sia un numero valido
  if (isNaN(numeroMax) || numeroMax <= 0) {
    alert("Inserisci un numero valido maggiore di 0");
    return;
  }

  // Loop da 1 a numeroMax
  for (let i = 1; i <= numeroMax; i++) {
    const item = document.createElement("li");
    item.textContent = i;

    // Condizione: numero pari o dispari
    if (i % 2 === 0) {
      item.style.color = "green";
    } else {
      item.style.color = "red";
    }

    // Aggiunge l'elemento alla lista nel DOM
    lista.appendChild(item);
  }
}
