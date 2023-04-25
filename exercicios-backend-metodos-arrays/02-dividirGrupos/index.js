const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

dividirGrupos = (nomes, quantidade) => {
    let grupo = [];
    let contador = 1;

    while (nomes.length > quantidade) {
        grupo = nomes.splice(0, quantidade);
        console.log(`Grupo ${contador}: ${grupo.join(", ")}.`);
        contador++;
    } 
    console.log(`Grupo ${contador}: ${nomes.join(", ")}.`);
};

dividirGrupos(nomes, tamanhoDoGrupo);