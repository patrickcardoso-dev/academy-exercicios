const capital = 1000;
const juros = 0.125;
const tempo = 5;

const montante = capital * (1 + juros) ** tempo;
const resultado = montante.toFixed(2);

const mensagem = `Um capital de ${capital} reais aplicado durante ${tempo} meses no sistema de juros compostos sob uma taxa mensal fixa de ${juros} gera um montante de ${resultado} reais.`
console.log(mensagem);