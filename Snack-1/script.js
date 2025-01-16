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

for(let k in bicycles){
    console.table(bicycles[k]) // stampo in console ogni oggetto
    // stampo in pagina la lista di oggetti
    outputList.innerHTML += `<li>${bicycles[k].nome}: ${bicycles[k].pesoKg} kg</li>` 
}




