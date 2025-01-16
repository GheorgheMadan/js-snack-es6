// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Genero un numero da 1 a 6 per l'utente
let dadiUtene = Math.floor(Math.random() * 6) +1;

// // Genero un numero da 1 a 6 per il pc 
let dadiPc = Math.floor(Math.random() * 6) +1;

// // stampo i risultati
console.log("Risultati: ") 
console.log("Player: " + dadiUtene, "Bot: " + dadiPc)

// // SE il punteggio ottenuto dall'utente  è più alto
if (dadiUtene > dadiPc){
    // ALLORA stampo l'alert con il punteggio e il vincitore 
    console.log("Hai vinto!! il tuo punteggio è " + dadiUtene)
    // ALTRIMENTI hai perso 
} else if (dadiUtene === dadiPc) {
    console.log("Pareggio!")
} else {
    console.log("Hai perso, ha vinto il PC!")
}



