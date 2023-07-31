const alturaEmCm = 185;

if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("Candidato aprovado para teste como líbero.")
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("Candidato aprovado para teste como ponteiro.")
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("Candidato aprovado para teste como oposto.")
} else if (alturaEmCm > 205) {
    console.log("Candidato aprovado para teste como central.")
} else if (alturaEmCm > 0 && alturaEmCm < 180) {
    console.log("Candidato reprovado.")
} else {
    console.log("Por favor, preencha o campo 'altura'.")
}