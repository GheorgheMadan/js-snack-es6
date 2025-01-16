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

// con il ciclo for cambio il valore di points 
for (let i = 0; i < teams.length; i++){
    teams[i].points = generaNumeroRandomRange(1, 114)
    teams[i].foul = generaNumeroRandomRange(1, 114)
}


// con il ciclo for in stampo tutto in pagina
for(let k in teams){
    console.log(teams[k].nome) // stampo in console ogni oggetto
    // stampo in pagina la lista di oggetti
    tableData.innerHTML += `<tr>
                                <td>${teams[k].nome}</td>
                                <td>${teams[k].points}</td>
                                <td>${teams[k].foul}</td> 
                            </tr>` 
}

const namesFouls = []

for (let i = 0; i < teams.length; i++){
    namesFouls.push(teams[i].nome, teams[i].foul)
    console.log(namesFouls)
}




// FUNZIONE che genera un numero da - a - 
function generaNumeroRandomRange(min, max){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}




