
let nomes = []

function adicionarAmigo() {

    let nome = document.getElementById('amigo').value

    if (nome == '') {
        alert('Campo não preenchido!')
    } else {
        nomes.push(nome)
        document.getElementById('listaAmigos').innerHTML += `<li>${nome}</li>`
    }
}

function sortearAmigo() {
    numeroSorteado = parseInt(Math.random() * nomes.length)
    document.getElementById('listaAmigos').innerHTML = ''
    document.getElementById('resultado').innerHTML = `A pessoa sorteada: ${nomes[numeroSorteado]}`
}