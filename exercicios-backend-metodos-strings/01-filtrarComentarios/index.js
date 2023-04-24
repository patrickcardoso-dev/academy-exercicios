const comentario = "Esse COVID é muito perigoso!";

const comentarioFormatado = comentario.toLowerCase();

if (comentarioFormatado.includes("covid") || comentarioFormatado.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}
