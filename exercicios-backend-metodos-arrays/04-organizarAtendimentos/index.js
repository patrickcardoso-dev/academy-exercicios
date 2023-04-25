const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const operacao = "atender";
const paciente = "Vitor"

atenderPacientes = (pacientes, operacao, paciente) => {
    if (operacao === "agendar") {
        pacientes.splice(pacientes.length, 0, paciente)
    } else if (operacao === "atender") {
        pacientes.splice(0, 1, paciente)
    };
    let fila = pacientes.join(", ");
    console.log(fila);
};

atenderPacientes(pacientes, operacao, paciente);

