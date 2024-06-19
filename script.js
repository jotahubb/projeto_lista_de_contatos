let form = document.querySelector('#formulario-contato')
const nomes = []
const numeros = []

let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionaLinha() 
    atualizaTabela()

})

function adicionaLinha(){

    const nomeContato = document.querySelector('#nome-contato')
    const numeroContato = document.querySelector('#numero-contato')

    nomes.push(nomeContato)
    numeros.push(numeroContato)

    let linha = '<tr>'
    linha +=  `<td> ${nomeContato.value} </td>`
    linha +=  `<td> ${numeroContato.value} </td>`
    linha +=  `</tr>`
    linhas += linha

    //alert(`Atividade: ${nomeContato.value} - Nota: ${numeroContato.value}`)

    nomeContato.value = ''
    numeroContato.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}