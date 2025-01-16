// function estraiIntervallo(arr, min, max){
//     const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
//     const newArray = []
//     newArray.push(numeroGenerato)
//     return newArray
// }


function estraiIntervallo(arr, a, b) {
    return arr.slice(); 
}
const newArray = []
console.log(estraiIntervallo(newArray, 5, 60))

// FUNZIONE che genera un numero da - a - 
function generaNumeroRandomRange(min, max){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}