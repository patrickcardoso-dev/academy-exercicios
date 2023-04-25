const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const operacao = "cancelar";
const paciente = "Vitor";

agendarPaciente = (pacientes, paciente) => {
    pacientes.splice(pacientes.length, 0, paciente);
};

atenderPaciente = (pacientes, paciente) => {
    pacientes.splice(0, 1, paciente);
};

cancelarAtendimento = (pacientes, paciente) => {
    if (pacientes.includes(paciente)) {
        const indicePaciente = pacientes.indexOf(paciente);
        pacientes.splice(indicePaciente, 1);
    } else {
        console.log("Agendamento do paciente não encontrado nos registros. Pacientes na fila:");
    };
};

organizarPacientes = (pacientes, operacao, paciente) => {
    if (operacao === "agendar") {
        agendarPaciente(pacientes, paciente)
    } else if (operacao === "atender") {
        atenderPaciente(pacientes, paciente)
    } else if (operacao === "cancelar") {
        cancelarAtendimento(pacientes, paciente)
    };
    let fila = pacientes.join(", ");
    console.log(fila);
};

organizarPacientes(pacientes, operacao, paciente);