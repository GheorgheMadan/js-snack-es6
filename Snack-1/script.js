// Creo l'array che contiene gli oggetti 
const bicycles = [
    {
        'nome': 'Tarmac',
        'pesoKg': 6.9
    }, 
    {
        'nome': 'Ultimate',
        'pesoKg': 6.2
    }, 
    {
        'nome': 'Emonda',
        'pesoKg': 6.7
    },
    {
        'nome': 'Dogma',
        'pesoKg': 6.8
    },
    {
        'nome': 'TCR',
        'pesoKg': 6.6
    },
    {
        'nome': 'Teammachine',
        'pesoKg': 6.5
    }
]
// Stampo in pagina l'array 
const outputList = document.getElementById("output");
const outputBicycle = document.getElementById('output-peso-minore')

for(let k in bicycles){
    console.table(bicycles[k]) // stampo in console ogni oggetto
    // stampo in pagina la lista di oggetti
    outputList.innerHTML += `<li>${bicycles[k].nome}: ${bicycles[k].pesoKg} kg</li>` 
}

let biciLeggera = bicycles[0] //uso una variabile per memorizzare l'oggetto con il peso più basso 
// uso il ciclo for per confrontare ogni bici dell'array con quella memorizzata nella variabile biciLEGERA
for(let i = 0; i < bicycles.length; i++){
    if(bicycles[i].pesoKg < biciLeggera.pesoKg){
        biciLeggera = bicycles[i]
        console.log(biciLeggera) //stampo il risultato in console 
        // stampo il risultato in pagina
        outputBicycle.innerHTML = `<strong>${biciLeggera.nome}</strong> con il peso di <strong>${biciLeggera.pesoKg}</strong>`
    } else {
         outputBicycle.innerHTML = `<strong>${biciLeggera.nome}</strong> con il peso di <strong>${biciLeggera.pesoKg}</strong>`
    }
}




