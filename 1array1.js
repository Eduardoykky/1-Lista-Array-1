/*
1. Crie um array para receber nomes dos alunos e outro para receber as notas
2. Para cada aluno inserido pergunte seu nome a nota da prova
3. Seu usuário deve poder parar de inserir informações quando desejar
4. Posteriormente exiba a nota de cada aluno, a soma das notas e a média geral da
turma
*/

var nomes = []
var notas = []
var contadorNotas = 0
var contadorNomes = 0
var continuar = true
var notaTotal = 0
var notaMedia = 0

while (continuar) {
    var nomeAlunoAtual = prompt("Qual o nome do aluno?")
    var notaAtual = parseInt(prompt("Insira sua nota"))
    nomes[contadorNomes] = nomeAlunoAtual
    notas[contadorNotas] = notaAtual
    console.log(nomes[contadorNomes], notas[contadorNotas])
    contadorNomes++
    contadorNotas++
    var desejaContinuar = prompt("Insira 1 para parar")

    if (desejaContinuar == 1) {
        continuar = false
    }
    notaTotal = notaTotal + notaAtual
    notaMedia = notaTotal / notas.length
    
}

console.log("A soma das notas são ", notaTotal, " e a média é ", notaMedia)