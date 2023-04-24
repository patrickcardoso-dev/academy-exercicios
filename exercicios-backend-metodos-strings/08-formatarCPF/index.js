const cpf = "011.022.033-44";

function formatarCPF () {
    let cpfFormatado = cpf.replace("-", "");

    while (cpfFormatado.includes(".")) {
        cpfFormatado = cpfFormatado.replace(".", "");
    };

    return cpfFormatado;
}



console.log(formatarCPF(cpf));