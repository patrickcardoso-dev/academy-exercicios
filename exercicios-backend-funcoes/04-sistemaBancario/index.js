const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        contaBancaria.saldo += valor;
        contaBancaria.historicos.push({
            tipo: "Depósito",
            valor: valor
        });
        console.log(`Depósito de R$ ${(valor/100).toFixed(2)} realizado para o cliente: ${contaBancaria.nome}.`)
    },
    sacar: function (valor) {
        if (valor > contaBancaria.saldo) {
            console.log(`Saldo insuficiente para o saque de ${contaBancaria.nome}.`)
        } else {
            contaBancaria.saldo -= valor;
            contaBancaria.historicos.push({
                tipo: "Saque",
                valor: valor
            });
            console.log(`Saque de R$ ${(valor/100).toFixed(2)} realizado para o cliente: ${contaBancaria.nome}. `)
        }
    },
    extrato: function () {
        let historicoString = "";
        for (let i = 0; i < contaBancaria.historicos.length; i++) {
            historicoString += `${contaBancaria.historicos[i].tipo} de R$ ${(contaBancaria.historicos[i].valor/100).toFixed(2)}.
        `;
        };
        
        console.log(`Extrato de ${contaBancaria.nome} - Saldo: R$ ${(contaBancaria.saldo/100).toFixed(2)}
        Histórico:
        ${historicoString}`);
    }
};

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();


