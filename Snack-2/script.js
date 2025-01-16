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

for(let k of teams){
    console.table(teams[k])
    tableData.innerHTML += `<tr> <td> ${teams[k].nome} </td></tr>`
}










// FUNZIONE che genera un numero da - a - 
function generaNumeroRandomRange(min, max){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}




