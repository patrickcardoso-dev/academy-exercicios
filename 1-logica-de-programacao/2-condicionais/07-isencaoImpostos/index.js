const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

const rendimentosTributaveis = 2855970;

if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos > rendimentosTributaveis) {
    console.log("Pega leão!");
} else if (aposentada === true || portadoraDeDoenca === true) {
    console.log("Isenta");
} else if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos <= rendimentosTributaveis) {
    console.log("Vaza leão, já tá difícil sem você!");
};
