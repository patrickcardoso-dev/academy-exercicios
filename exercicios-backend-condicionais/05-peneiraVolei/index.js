const alturaEmCm = 185;

if (alturaEmCm >= 180) {
    console.log("Candidato aprovado para próxima fase.")
} else if (alturaEmCm > 0 && alturaEmCm < 180) {
    console.log("Candidato reprovado.")
} else {
    console.log("Por favor, preencha o campo 'altura'.")
}