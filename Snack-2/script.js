// creo l'array con le squadre di calcio 
const teams = [
    {
        'nome': 'Inter',
        'points': 0,
        'foul': 0
    },
    {
        'nome': 'Fiorentina',
        'points': 0,
        'foul': 0
    },
    {
        'nome': 'Atalanta',
        'points': 0,
        'foul': 0
    },
    {
        'nome': 'Sampdoria',
        'points': 0,
        'foul': 0
    },
    {
        'nome': 'Lazio',
        'points': 0,
        'foul': 0
    },
    {
        'nome': 'Roma',
        'points': 0,
        'foul': 0
    }
]

const tableData = document.getElementById('tabella')

// con il ciclo for cambio il valore di points e foul
for (let i = 0; i < teams.length; i++){
    teams[i].points = generaNumeroRandomRange(1, 114)
    teams[i].foul = generaNumeroRandomRange(1, 114)
}


// con il ciclo for in stampo tutto in pagina
for(let k in teams){
    console.log(teams[k].nome) // stampo in console ogni oggetto
    // stampo in pagina la lista di oggetti
    tableData.innerHTML += `<tr>
                                <td class="border">${teams[k].nome}</td>
                                <td class="border">${teams[k].points}</td>
                                <td class="border">${teams[k].foul}</td> 
                            </tr>` 
}

// creo un array vuoto
const namesFouls = []
// con il ciclo for cerco e aggiungo gli elementi che mi servono nel nuovo array
for (let i = 0; i < teams.length; i++){
    let objectTeam = {'nome': teams[i].nome, 'foul': teams[i].foul}
    namesFouls.push(objectTeam)
}
console.table(namesFouls)




// FUNZIONE che genera un numero da - a - 
function generaNumeroRandomRange(min, max){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}




