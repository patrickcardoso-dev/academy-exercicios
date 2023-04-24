const cpf = "12345678900";
const cnpj = "12345678000199";

function formatarCPF () {
    let cpfFormatado;

    if (cpf.length < 11) {
        console.log("CPF inválido");
    } else if (cpf.length === 11) {
        let cpfSeparado = [];
        for (let i =0; i < cpf.length; i += 3) {
            cpfSeparado.push(cpf.slice(i, i + 3));
        };
        cpfFormatado = `${cpfSeparado[0]}.${cpfSeparado[1]}.${cpfSeparado[2]}-${cpfSeparado[3]}`
    };

    return cpfFormatado;
};

function formatarCNPJ () {
    let cnpjFormatado;

    if (cnpj.length < 14) {
        console.log("CNPJ inválido");
    } else if (cnpj.length === 14) {
        cnpjFormatado = `${cnpj.slice(0,2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5,8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
    }; 

    return cnpjFormatado;
};

console.log(formatarCPF(cpf));
console.log(formatarCNPJ(cnpj));