const email = "aluno@cubos.academy";

function validarEmail (email) {
    let emailValido = true;

    if (email.indexOf("@") < 0 || email.indexOf(".") <= 0 || email.lastIndexOf(".") == email.length -1 ) {
        emailValido = false;
    };

    if (emailValido) {
        console.log("E-mail válido.");
    } else {
        console.log("E-mail inválido.");
    };
};

console.log(validarEmail(email));